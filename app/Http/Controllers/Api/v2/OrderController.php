<?php

namespace App\Http\Controllers\Api\v2;

use App\DiscountCode;
use App\Exceptions\CheckDiscount;
use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\OrderRequest;
use App\Http\Requests\OrderFinishedRequest;
use App\Http\Resources\Api\v2\OrderResource;
use App\Http\Resources\Api\v2\OrdersResource;

use App\Http\Resources\OrderSpisiaclResourc;
use App\Order;
use Auth;
use function App\Helpers\mainManagerRoles;

class OrderController extends BaseController
{
    private $permission_module_name="order";

    public function __construct()
    {
        $this->tableName = 'orders';
        parent::__construct();
    }

    public function index()
    {

        try {


            return $this->getAllDataFromIndex(OrderResource::class, Order::class, Auth::user(), 'orders');

        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function getorderss(){
        $orders = OrdersResource::collection(Order::all());

        return $this->getResponse( $orders);

    }


    public function getOrderByType($id)
    {
        try {
            $message = [
                'get received order success',
                'get order being processed success',
                'get order under maintenance',
                'get finished order success',
                'get rejected order success',
            ];
            $type = [
                'installment_order' => 'installation_manager',
                'prevention_maintenance_order' => 'maintenance_manager',
                'job_application_order' => 'hr_manager',
                'consultant_order' => 'consulting_manager',
                'maintenance_order' => 'maintenance_manager',
            ];
            if (Auth::user()->role == 'technical_manager') {
                $order = Order::where('status', $id)->whereIn('type', [
                    'maintenance_order',
                    'installment_order',
                ])->getWithOrderByDesc();
                return $this->getResponse($order, $message[$id], 200);
            }
            $order = Order::where(['status' => $id,
                'type' => array_search(Auth::user()->role, $type)
            ])->getWithOrderByDesc();
            return $this->getResponse($order, $message[$id], 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }


    public function store(OrderRequest $request)
    {
        try {
        $this->checkUserHasPermission('store',$this->permission_module_name);

        $data = $request->validated();
        $user_id = Auth::user()->id;
        $data['user_id'] = $user_id;
        $data['employee_id'] = $request['employee_id'] == null ? null : $request['employee_id'];
        $final = Order::create($this->CheckDiscountIsExsist($request, $data));
        return $this->getResponse($final, myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }


    public function show($id)
    {
        try {
            $model_check = Order::find($id);
            if (!is_null($model_check)) {

                return $this->getResponse(new OrderSpisiaclResourc($model_check));
            } else {
                return $this->getResponse(null, myTrans('resource_not_found'), true, 404);
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }


    public function update(OrderRequest $request, $id)
    {
        try {
            $data = $request->validated();
            $data['employee_id'] = $request['employee_id'] == null ? null : $request['employee_id'];
            $data = Order::find($id)->update($this->CheckDiscountIsExsist($request, $data));
            return $this->getResponse($data, myTrans('update_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }

    }

    public function orderFinished(OrderFinishedRequest $request)
    {


        $this->checkUserHasPermission('finish order', $this->permission_module_name);
        try {
            $data               = $request->validated();
            $Order              = Order::find($data['id']);
            $Order->is_finished = 1;
            $Order->save();
            return $this->getResponse(null, myTrans('update_success'), 200);
        }
        catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }


    }



    public function destroy($id)
    {
        try {
            return $this->DeleteCustomElement(Order::class, $id, myTrans('resource_not_found'));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }


    public function CheckDiscountIsExsist($request, $data)
    {
        try {
            if (isset($request->discountCode) || $request->discountCode != null || $request->discountCode != '') {

                $discountCode = DiscountCode::where('name', $request->discountCode)->first();
                if (isset($discountCode)) {

                    $checkIfAnyOrderHasThisDis = Order::where('discount_code_id', $discountCode->id)->first();

                    if (isset($checkIfAnyOrderHasThisDis)) {

                        throw new CheckDiscount(myTrans('discount_taken_before'));
                    } else {

                        $data['discount_code_id'] = $discountCode->id;
                    }
                } else {

                    throw new CheckDiscount(myTrans('undefined_this_discount'));
                }
            } else {

                $data['discount_code_id'] = null;
            }
            return $data;
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public static function changeOrderStatus(Order $order, $status, \Closure $callback = null)
    {
        try {
            if ($callback == null) {
                if (!self::checkOrderStatusEqual($order, 'received')) {
                    throw new PublicException(myTrans('order_pass_received_phase'));
                }
                return $order->update(['status' => $status]);
            }
            return $callback($order);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }


    public static function checkOrderStatusEqual(Order $order, $status, \Closure $callback = null)
    {
        try {
            if ($callback == null) {
                return $order['status'] == $status;
            }
            return $callback($order);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }
}
