<?php

namespace App\Http\Controllers\Api\v2;

use App\Events\PublicSendNotification;
use App\Exceptions\PublicException;
use App\Http\Controllers\Api\v1\TransactionController;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CheckUpFeesRequest;
use App\Http\Requests\DeleteSparePart;
use App\Http\Requests\DeleteSparePartRequest;
use App\Http\Requests\DetermineFixLocation;
use App\Http\Requests\DetermineSparePartRequest;
use App\Http\Requests\MaintenanceOrderRequest;
use App\Http\Requests\ManagerDetermineSparePart;
use App\Http\Requests\ManagerDetrmineSparePart;
use App\Http\Resources\Api\v2\MaintenanceOrderResource;
use App\Http\Resources\Api\v2\OrderResource;
use App\Http\Resources\Collection\Api\v2\MaintenanceOrderCollection;
use App\Image;
use App\MaintenanceOrder;
use App\MaintenanceOrderFee;
use App\Order;
use App\OrderSparePart;
use App\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\resetOrderRequest;
use DateTime;

class MaintenanceOrderController extends BaseController
{

    protected $limit                  = 10;
    private   $warrantyImagePath      = "files/images/warranty/";
    private   $imagePath              = "files/images/image/";
    protected $order;
    private   $permission_module_name = "maintenanace order";

    public function __construct()
    {
        $this->tableName = 'maintenance_orders';
        $this->order     = new Order();
        parent::__construct();
    }


    public function index()
    {
        try {
            $this->checkUserHasPermission("show", $this->permission_module_name);
            $user = Auth::user();
            if ($user->role == "customer" || $user->role == 'gallery') {
                $data = new MaintenanceOrderCollection(MaintenanceOrder::whereHas('order', function ($q) use ($user) {
                    return $q->where('user_id', $user->id);
                })->orderBy('created_at', 'desc')->paginate($this->limit));
                return $this->getResponse($data);
            }
            if ($user->role == 'technical_manager') {
                $data = new MaintenanceOrderCollection(MaintenanceOrder::whereHas('order', function ($q) {
                    return $q->where('type', 'maintenance_order')->where('status', '>', 0)->orderBy('created_at', 'desc');
                })->orderBy('created_at', 'desc')->paginate($this->limit));
                return $this->getResponse($data);
            }
            return $this->getAllData(MaintenanceOrderCollection::class, MaintenanceOrder::class);
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function store(MaintenanceOrderRequest $request)
    {
        try {

            $this->checkUserHasPermission("store", $this->permission_module_name);
            $data = $request->validated();
            $data['location'] = $this->getLocation($data);
            $MaintenanceOrder = DB::transaction(function () use ($request, $data) {

                $this->checkAppointment($data['appointment_id']);

                $data['order_id'] = $this->saveOrder('maintenance_order', $data)->id;

                if (isset($data['warranty_image'])) {
                    $data['warranty_image'] = $this->SaveFile($request->warranty_image, 'warranty_image', null, $this->warrantyImagePath);
                    $data['warranty_type']  = 0; //  this mean with warranty
                }
                else {
                    $data['warranty_type'] = 1;
                }

                $MaintenanceOrder = MaintenanceOrder::create($data);

                $spare=$request['sparepart_id'];
                $str = explode("'",$spare);//became here an array with numbers
                $arr = explode(',',implode('',$str));
                $str = array_map(function($val){
                return intval($val);
                },$arr
            );



            $MaintenanceOrder->sparePart()->sync($str);

                if ($MaintenanceOrder['has_image'] && isset($data['images'])) {
                    $this->saveImageFromMaintenance($MaintenanceOrder, $data, false);
                }
                return $MaintenanceOrder;
            });
            return $this->getResponse(new MaintenanceOrderResource($MaintenanceOrder), myTrans('add_success'));
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function show($id)
    {
        $this->checkUserHasPermission("show specific", $this->permission_module_name);

        return $this->ShowCustomElement(MaintenanceOrder::class, $id, MaintenanceOrderResource::class, myTrans('resource_not_found'));
    }


    public function update(MaintenanceOrderRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update", $this->permission_module_name);
            $data = $request->validated();
            if (isset($data['location'])) {
                $data['location'] = $this->getLocation($data);
            }

            // if (isset($data['warranty_image'])) {
            //     $data['warranty_image'] = $this->SaveFile($request->warranty_image, 'warranty_image', null, $this->warrantyImagePath);
            //     $data['warranty_type'] = 0; //  this mean with warranty
            // } else {
            //     $data['warranty_type'] = 1;
            // }

            if (isset($data['appointment_id'])) {
                $this->checkAppointment($data['appointment_id']);
            }
            $MaintenanceOrder = $this->find(MaintenanceOrder::class, $id);
            if ($MaintenanceOrder['has_image'] && isset($data['images'])) {
                $data['images'] = $this->saveImageFromMaintenance($MaintenanceOrder, $data, false);
            }
            $initOrder = $MaintenanceOrder->order;
            $this->checkIfAdminAcceptOrder($data, $initOrder->user_id);

            if (isset($data['status'])) {
                if ($initOrder->getAttributes()['status'] > 1) {
                    if ($initOrder->getAttributes()['status'] != 4) {
                        //    $this->checkIfCustomerIsCredit($initOrder->user_id);
                    }
                }
                if ($data['status'] === 5 && $initOrder->getAttributes()['status'] !== 5) {
                    $initOrder->update(['status' => 5]);
                }
            }

            if (isset($data['technical_status'])) {
                //$this->checkIfCustomerIsCredit($initOrder->user_id);
            }

            $this->checkIfUserCancelOrder($MaintenanceOrder, $data);
            $MaintenanceOrder->order->update($data);
            $MaintenanceOrder = $this->find(MaintenanceOrder::class, $id);
            $MaintenanceOrder->update($data);
            return $this->getResponse(new MaintenanceOrderResource($this->find(MaintenanceOrder::class, $id)), "edit success");
        }
        catch (Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function restartMaintinanceOrder(resetOrderRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("store", $this->permission_module_name);
            $MaintenanceOrder = $this->find(MaintenanceOrder::class, $id);
            $order            = $MaintenanceOrder->order;
            $data             = $request->validated();
            if ($order->getAttributes()['status'] < 3) {
                return $this->getResponse(["order is not finish"], "order is not finish", true, 400);
            }

            $orderDate  = new DateTime($order->created_at);
            $curentDate = new DateTime(date('Y-m-d H:i:s'));
            $interval   = $curentDate->diff($orderDate);

            if ($interval->format('%a') > 60) {
                return $this->getResponse(["order date biger 60 days"], "order date biger 60 days", true, 400);
            }

            $MaintenanceOrder->warranty_type  = 0;
            $MaintenanceOrder->reason_restart = $data['reason_restart'];
            $MaintenanceOrder->update();

            $order->technical_status = null;
            $order->status           = 0;
            $order->update();

            if (MaintenanceOrderFee::where('maintenance_order_id', $MaintenanceOrder->id)->get()->count())
                MaintenanceOrderFee::where('maintenance_order_id', $MaintenanceOrder->id)->get()->delete();

            return $this->getResponse(new MaintenanceOrderResource($this->find(MaintenanceOrder::class, $id)), "edit success");
        }
        catch (Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function updateStatus(MaintenanceOrderRequest $request, $id)
    {
        try {
            ;
            $this->checkUserHasPermission("update status", $this->permission_module_name);
            $data             = $request;
            $MaintenanceOrder = $this->find(MaintenanceOrder::class, $id);
            $order            = $MaintenanceOrder->order;
            if (isset($data['status']))
                $order->status = $data['status'];
            if (isset($data['price']))
                $order->price = $data['price'];
            if (isset($data['technical_status']))
                $order->technical_status = $data['technical_status'];
            if (isset($data['technical_reason']))
                $order->technical_reason = $data['technical_reason'];
            $order->update();
            // $order->update($data);
            // if (isset($data['appointment_id']))
            //     $this->sendNotificationToAuthUser(['order', 'order_appointment_change', null, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type]);

            return $this->getResponse(new MaintenanceOrderResource($this->find(MaintenanceOrder::class, $id)), "edit success");
        }
        catch (Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function employeeDetermineFixLocation(DetermineFixLocation $request)
    {
        $this->checkUserHasPermission("employee determine fix");
        try {
            $order = $this->order->findOrFail($request->order_id);
            $order->update($request->all());
            return $this->getResponse(new OrderResource($order), "employee determine fix location success");
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function determineSparePart(DetermineSparePartRequest $request)
    {
        try {
            if (MaintenanceOrder::findOrFail($request->maintenance_order_id)->order->status >= 3) {
                return $this->getResponse(myTrans('cant_add_SparePart'));
            }

            DB::transaction(function () use ($request) {

                $this->checkUserHasPermission("determine spare cart", $this->permission_module_name);
                $data             = $request->all();
                $maintenanceOrder = MaintenanceOrder::findOrFail($data['maintenance_order_id']);

                $this->checkIfUserCancelOrderBeforeMove($maintenanceOrder);

                $spare = OrderSparePart::where(
                    [
                        'spare_id'             => $data['spare_id'],
                        'maintenance_order_id' => $data['maintenance_order_id']
                    ]
                )->first();


                if (isset($spare)) {
                    $spare->update([
                        'quantity' => $spare->quantity + $data['quantity'],
                    ]);
                }
                else {
                    OrderSparePart::create([
                        'spare_id'             => $data['spare_id'],
                        'quantity'             => $data['quantity'],
                        'maintenance_order_id' => $data['maintenance_order_id'],
                    ]);
                }

                $maintenanceOrder->update(['fix_place' => 1]);
                (new TransactionController())->makeMaintenanceOrderTransaction($maintenanceOrder->id, false);


                // $this->sendNotificationToAuthUser(['transaction', 'add_new_maintenance_order_for_customer', null, $maintenanceOrder->order->id, $maintenanceOrder->order->type]);


                // $this->sendNotificationToManager(null, [
                //     'transaction', 'add_new_maintenance_order_for_managers', Auth::user()->user_name, $maintenanceOrder->order->id, $maintenanceOrder->order->type
                // ]);

                // for (man ,tech ).. manager
                // $this->sendNotificationToManager(
                //     null,
                //     ['spare_part', 'add_new', $maintenanceOrder->id, $maintenanceOrder->order->id, $maintenanceOrder->order->type]
                // );

                // for customer
                // $this->sendNotificationToCustomer(
                //     ['id' => $maintenanceOrder->order->user_id],
                //     ['spare_part', 'add_new', $maintenanceOrder->id, $maintenanceOrder->order->id, $maintenanceOrder->order->type]
                // );
            });
            return $this->getResponse(myTrans('add_spare_part_success'));
        }
        catch (Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function deleteSparePart(DeleteSparePartRequest $request)
    {
        try {

            $this->checkUserHasPermission("delete spare part", $this->permission_module_name);
            $data             = $request->validated();
            $maintenanceOrder = MaintenanceOrder::findOrFail($data['maintenance_order_id']);
            $maintenanceOrder->spareParts()->detach($data['spare_id']);
            (new TransactionController())->makeMaintenanceOrderTransaction($maintenanceOrder->id, false);
            return $this->getResponse(myTrans('delete_spare_part_order_successfully'));
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function changeOrderToWithoutWarranty($maintenanceOrderId)
    {
        try {
            $this->checkUserHasPermission("change Order To Without Warranty", $this->permission_module_name);
            $MaintenanceOrder = MaintenanceOrder::findOrFail($maintenanceOrderId);
            $MaintenanceOrder->update(['warranty_type' => 1]);
            return $this->getResponse(new MaintenanceOrderResource($MaintenanceOrder), "change this order to be order without warranty successfully");
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function managerCheckUpFee(CheckUpFeesRequest $request)
    {
        try {
            $this->checkUserHasPermission("check up fee", $this->permission_module_name);
            $data = $request->all();
            if (!isset($data['fee_amount']))
                $data['fee_amount'] = 0;
            $MaintenanceOrder = MaintenanceOrder::findOrfail($data['maintenance_order_id']);
            $this->checkIfUserCancelOrderBeforeMove($MaintenanceOrder);
            $order = $MaintenanceOrder->order;
            $tt    = MaintenanceOrderFee::where('maintenance_order_id', $data['maintenance_order_id'])->get();
            if ($tt->count() == 0) {
                $tt = MaintenanceOrderFee::create([
                    'fee_id'               => $data['fee_id'] ?? 1,
                    'amount'               => $data['fee_amount'],
                    'maintenance_order_id' => $data['maintenance_order_id'],
                ]);
            }
            (new TransactionController())->makeMaintenanceOrderTransaction($MaintenanceOrder->id, false);
            $this->sendNotificationToAuthUser(['transaction', 'add_new_maintenance_order_for_customer', null, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type]);
            $this->sendNotificationToManager(null, [
                'transaction', 'add_new_maintenance_order_for_managers', Auth::user()->user_name, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type
            ]);
            $this->sendNotificationToManager(null, ['fees', 'add_new', $MaintenanceOrder->id, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type]);
            // notify customer about fees
            $this->sendNotificationToCustomer(['id' => $order->user_id], ['fees', 'add_new', $MaintenanceOrder->id, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type]);
            return $this->getResponse(new MaintenanceOrderResource(MaintenanceOrder::findOrfail($data['maintenance_order_id'])), "add fees successfully");
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function ChangeFee(CheckUpFeesRequest $request)
    {
        try {
            $this->checkUserHasPermission("check up fee", $this->permission_module_name);
            $data             = $request->all();
            $MaintenanceOrder = MaintenanceOrder::findOrfail($data['maintenance_order_id']);
            $tt               = MaintenanceOrderFee::where('maintenance_order_id', $request['maintenance_order_id'])->get();
            if ($tt->count() >= 1) {
                $Fee         = MaintenanceOrderFee::where('maintenance_order_id', $data['maintenance_order_id'])->first();
                $Fee->amount = $request->fee_amount;
                $Fee->fee_id = $request->fee_id;
                $Fee->update();
            }
            (new TransactionController())->makeMaintenanceOrderTransaction($MaintenanceOrder->id, false);
            // $this->sendNotificationToAuthUser(['transaction', 'add_new_maintenance_order_for_customer', null, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type]);
            // $this->sendNotificationToManager(null, [
            //     'transaction', 'add_new_maintenance_order_for_managers', Auth::user()->user_name, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type
            // ]);
            // $this->sendNotificationToManager(null, ['fees', 'add_new', $MaintenanceOrder->id, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type]);
            // // notify customer about fees
            // $this->sendNotificationToCustomer(['id' => $order->user_id], ['fees', 'add_new', $MaintenanceOrder->id, $MaintenanceOrder->order->id, $MaintenanceOrder->order->type]);
            return $this->getResponse(new MaintenanceOrderResource(MaintenanceOrder::findOrfail($data['maintenance_order_id'])), "add fees successfully");
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function TechManagerDeterminePrice(ManagerDetermineSparePart $request)
    {
        try {
            $this->checkUserHasPermission("Tech Manager Determine Price", $this->permission_module_name);
            $data             = $request->validated();
            $sparePartsAmount = 0;
            $feeAmount        = 0;
            if (isset($data['fee_id']) && $data['fee_amount']) {
                $feeAmount = $this->saveFeesAmount($data);
            }
            if (isset($data['spare_parts_amount'])) {
                $sparePartsAmount = $data['spare_parts_amount'];
            }
            $MaintenanceOrder = MaintenanceOrder::findOrFail($data['maintenance_order_id']);
            $MaintenanceOrder->order->update([
                'price' => abs($feeAmount + $sparePartsAmount)
            ]);
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        return $this->getResponse(new MaintenanceOrderResource($MaintenanceOrder), "add all price to this order successfully");
    }

    public function saveFeesAmount($data)
    {
        $mainOrderFees = MaintenanceOrderFee::where([
            'maintenance_order_id' => $data['maintenance_order_id'],
            'fee_id'               => $data['fee_id']
        ])->firstOrFail();
        $mainOrderFees->update([
            'fee_amount' => $data['fee_amount']
        ]);
        return $mainOrderFees->amount;
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);
        return $this->DeleteCustomElementFromRelation(MaintenanceOrder::class, $id, 'order', myTrans('resource_not_found'));
    }


    protected function getLocation(array $data)
    {

        try {
            if (!isset($data['location'])) {
                return json_encode([
                    "lat" => $data['lat'] ?? 'decoding_lat is missed',
                    "lon" => $data['lon'] ?? 'decoding_lat is missed',
                ]);
            }
            else {
                throw new PublicException(myTrans('correct_location_required'));
            }
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    private function saveImageFromMaintenance($MaintenanceOrder, array $data, bool $false)
    {
        try {
            if (!is_array($data['images'])) {
                $data2 = [
                    'image'                => $this->SaveFile($data['images'], 'images', null, $this->imagePath),
                    'user_id'              => Auth::user()->id,
                    'maintenance_order_id' => $MaintenanceOrder['id'],
                ];
                Image::create($data2);
            }
            else {
                foreach ($data['images'] as $item) {
                    $data2 = [
                        'image'                => $this->SaveFile($item, 'images', null, $this->imagePath) ?? null,
                        'user_id'              => Auth::user()->id ?? null,
                        'order_id'             => $data['order_id'] ?? null,
                        'maintenance_order_id' => $MaintenanceOrder['id'],
                    ];
                    Image::create($data2);
                }
            }
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    private function sendNotificationToCustomer($where, $message)
    {
        try {
            $extraData = [
                'users'   => User::where($where)->get(),
                'title'   => 'inmaa',
                'message' => $message,
            ];
            event(new PublicSendNotification($extraData));
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    private function checkIfAdminAcceptOrder($requestData, $id)
    {
        try {
            if (isset($requestData['status']) && $requestData['status'] > 1) {
                //$this->checkIfCustomerIsCredit($id);
            }
        }
        catch (Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }
}
