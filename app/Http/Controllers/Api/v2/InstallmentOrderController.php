<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\InstallmentOrderRequest;
use App\Http\Resources\Api\v2\InstallmentOrderResource;
use App\Http\Resources\Collection\Api\v2\InstallmentOrderCollection;
use App\InstallmentOrder;
use Auth;
use App\Manufacture;
use App\Http\Controllers\Api\v1\TransactionController;
use App\Http\Requests\CheckUpFeesRequestInstalment;
use App\Http\Requests\resetOrderRequest;
use App\MaintenanceOrderFee;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use DateTime;

use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class InstallmentOrderController extends BaseController
{
    private $permission_module_name="installment order";

    public function __construct()
    {
        $this->tableName = 'installment_orders';
        parent::__construct();
    }


    public function index()
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        $user = Auth::user();
        if (userHasRole($user,['customer', 'gallery'])) {
            return $this->getByRole(['user_id' => $user->id]);
        }
        if (userHasRole($user,array_merge(mainManagerRoles(), ['installation_manager']))) {
            return $this->getByRole(['type' => 'installment_order']);
        }
        if (userHasRole($user,['technical_manager'])) {
            $data = new InstallmentOrderCollection(InstallmentOrder::
            whereHas('order', function ($q) {
                return $q->where('type', 'installment_order')->where('status', '>', 0);
            })
                ->orderBy('created_at', 'desc')->paginate($this->limit));
            return $this->getResponse($data);
        }
        return $this->getAllData(InstallmentOrderCollection::class, InstallmentOrder::class);
    }

    public function store(InstallmentOrderRequest $request)
    {
        try {
            $final = DB::transaction(function () use ($request) {
                if (isset($data['appointment_id'])) {
                    $this->checkAppointment($data['appointment_id']);
                }
                $this->checkUserHasPermission("store",$this->permission_module_name);
                $data = $request->validated();
                $dataToSave = $this->discusCase($data);
                $dataToSave['order_id'] = $this->saveOrder('installment_order', $data)->id;
                return InstallmentOrder::create($dataToSave);
            });
            return $this->getResponse(new InstallmentOrderResource(InstallmentOrder::find($final->id)), myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function restartInstallmentOrder(resetOrderRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("store",$this->permission_module_name);
            $InstallmentOrder = $this->find(InstallmentOrder::class, $id);
            $order = $InstallmentOrder->order;
            $data = $request->validated();
            if($order->getAttributes()['status'] < 3){
                return $this->getResponse(["order is not finish"], "order is not finish", true, 400);
            }

            $orderDate = new DateTime($order->created_at);
            $curentDate = new DateTime(date('Y-m-d H:i:s'));
            $interval = $curentDate->diff($orderDate);

            if($interval->format('%a') > 60){
                return $this->getResponse(["order date biger 60 days"], "order date biger 60 days", true, 400);
            }

            $InstallmentOrder->reason_restart = $data['reason_restart'];
            $InstallmentOrder->update();

            $order->technical_status = null;
            $order->status = 0;
            $order->update();

            if(MaintenanceOrderFee::where('maintenance_order_id', $InstallmentOrder->id)->get()->count())
            MaintenanceOrderFee::where('maintenance_order_id', $InstallmentOrder->id)->get()->delete();

            return $this->getResponse(new InstallmentOrderResource($this->find(InstallmentOrder::class, $id)), "edit success");
        } catch (Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function managerCheckUpFee(CheckUpFeesRequestInstalment $request)
    {
        try {
            $this->checkUserHasPermission("check up fee",$this->permission_module_name);
            $data = $request->all();
            if (!isset($data['fee_amount']))
                $data['fee_amount'] = 0;
            $InstallmentOrder = InstallmentOrder::findOrfail($data['installment_order_id']);
            $this->checkIfUserCancelOrderBeforeMove($InstallmentOrder);
            $order = $InstallmentOrder->order;
            $tt =  MaintenanceOrderFee::where('installment_order_id', $data['installment_order_id'])->get();
            if ($tt->count() == 0) {
                $tt = MaintenanceOrderFee::create([
                    'fee_id' => $data['fee_id'] ?? 1,
                    'amount' => $data['fee_amount'],
                    'Installment_order_id' => $data['installment_order_id'],
                ]);
            }
            (new TransactionController())->makeMaintenanceOrderTransactionInstalment($InstallmentOrder->id, false);
            // $this->sendNotificationToAuthUser(['transaction', 'add_new_maintenance_order_for_customer', null, $InstallmentOrder->order->id, $InstallmentOrder->order->type]);
            // $this->sendNotificationToManager(null, [
            //     'transaction', 'add_new_maintenance_order_for_managers', Auth::user()->user_name, $InstallmentOrder->order->id, $InstallmentOrder->order->type
            // ]);
            // $this->sendNotificationToManager(null, ['fees', 'add_new', $InstallmentOrder->id, $InstallmentOrder->order->id, $InstallmentOrder->order->type]);
            // // notify customer about fees
            // $this->sendNotificationToCustomer(['id' => $order->user_id], ['fees', 'add_new', $InstallmentOrder->id, $InstallmentOrder->order->id, $InstallmentOrder->order->type]);
            return $this->getResponse(new InstallmentOrderResource(InstallmentOrder::findOrfail($data['installment_order_id'])), "add fees successfully");
        } catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function ChangeFee(CheckUpFeesRequestInstalment $request)
    {
        try {

            $this->checkUserHasPermission("check up fee",$this->permission_module_name);
            $data = $request->all();
            $InstallmentOrder = InstallmentOrder::findOrfail($data['installment_order_id']);
            $tt =  MaintenanceOrderFee::where('installment_order_id', $data['installment_order_id'])->get();
            if ($tt->count() >= 1) {
                $Fee = MaintenanceOrderFee::where('installment_order_id', $data['installment_order_id'])->first();
                $Fee->amount = $request->fee_amount;
                $Fee->fee_id = $request->fee_id;
                $Fee->update();
            }
            (new TransactionController())->makeMaintenanceOrderTransactionInstalment($InstallmentOrder->id, false);
            // $this->sendNotificationToAuthUser(['transaction', 'add_new_maintenance_order_for_customer', null, $InstallmentOrder->order->id, $InstallmentOrder->order->type]);
            // $this->sendNotificationToManager(null, [
            //     'transaction', 'add_new_maintenance_order_for_managers', Auth::user()->user_name, $InstallmentOrder->order->id, $InstallmentOrder->order->type
            // ]);
            // $this->sendNotificationToManager(null, ['fees', 'add_new', $InstallmentOrder->id, $InstallmentOrder->order->id, $InstallmentOrder->order->type]);
            // // notify customer about fees
            // $this->sendNotificationToCustomer(['id' => $order->user_id], ['fees', 'add_new', $InstallmentOrder->id, $InstallmentOrder->order->id, $InstallmentOrder->order->type]);
            return $this->getResponse(new InstallmentOrderResource(InstallmentOrder::findOrfail($data['installment_order_id'])), "add fees successfully");
        } catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function show($id)
    {
        $this->checkUserHasPermission("show specific",$this->permission_module_name);
        return $this->ShowCustomElement(InstallmentOrder::class, $id, InstallmentOrderResource::class, myTrans('resource_not_found'));
    }



    public function update(InstallmentOrderRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $data = $request->validated();
            $installmentOrder = InstallmentOrder::findOrFail($id);
            if (
                !isset($data['decoding_lat']) &&
                !isset($data['decoding_lon']) &&
                !isset($data['installation_lat']) &&
                !isset($data['installation_lon'])
            ) {
                $dataToSave = $this->discusCase($data, false);
            } else {
                $dataToSave = $this->discusCase($data);
            }
            if (isset($data['appointment_id'])) {
                $this->checkAppointment($data['appointment_id']);
            }
            $this->checkIfUserCancelOrder($installmentOrder, $data);

            $installmentOrder->update($dataToSave);
            $installmentOrder->order->update($dataToSave);
            return $this->getResponse(InstallmentOrder::findOrFail($id), myTrans('edit_success'));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function destroy($id)
    {
        $this->checkUserHasPermission("destory",$this->permission_module_name);
        return $this->DeleteCustomElementFromRelation(InstallmentOrder::class, $id, 'order', myTrans('resource_not_found'));
    }


    protected function getLocation(array $data)
    {
        if (!isset($data['location'])) {
            return json_encode([
                "decoding_lat" => $data['decoding_lat'] ?? 'decoding_lat is missed',
                "decoding_lon" => $data['decoding_lon'] ?? 'decoding_lon is missed',
                "decoding_des" => $data['decoding_des'] ?? 'decoding_des is missed',

                "installation_lat" => $data['installation_lat'] ?? 'installation_lat is missed',
                "installation_lon" => $data['installation_lon'] ?? 'installation_lon is missed',
                "installation_des" => $data['installation_des'] ?? 'installation_des is missed',

            ]);
        } else {
            throw new PublicException(myTrans("correct_location_required"));
        }
    }

    protected function getItem($data)
    {
        if (isset($data)) {
            foreach ($data as $key=>$it) {
                $data[$key]['brand'] = Manufacture::find($it['brand_id']);
            }
            return json_encode($data);
        } else {
            return null;
        }
    }


    private function discusCase(array $data, $useLocation = true)
    {
        if (!is_null(Auth::user()->customer)) {
            $validate = Validator::make(Auth::user()->customer->toArray(), [
                'name' => 'string',
                'phone' => 'numeric',
            ]);
            if ($validate->fails()) {
                $errors = (new ValidationException($validate))->errors();
                throw new HttpResponseException(response()->json($errors, JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
            }
            $data['name'] = Auth::user()->customer->name;
            $data['phone'] = Auth::user()->customer->phone;
        }
        if (isset($data['name_emp']) && isset($data['phone_emp'])) {
            $validate = Validator::make(request()->all(), [
                'name_emp' => 'string',
                'phone_emp' => 'min:10|numeric',
            ]);
            if ($validate->fails()) {
                $errors = (new ValidationException($validate))->errors();
                throw new HttpResponseException(response()->json($errors, JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
            }
            $data['name'] = $data['name_emp'];
            $data['phone'] = $data['phone_emp'];
        }
        if ($useLocation) {
            $data['location'] = $this->getLocation($data);
        }
        if(isset($data['items']))
            $data['item'] = $this->getItem($data['items']);

        return $data;
    }

    private function getByRole($whereCloser)
    {
        $data = new InstallmentOrderCollection(InstallmentOrder::
        whereHas('order', function ($q) use ($whereCloser) {
            return $q->where($whereCloser);
        })
            ->orderBy('created_at', 'desc')->paginate($this->limit));
        return $this->getResponse($data);
    }
}
