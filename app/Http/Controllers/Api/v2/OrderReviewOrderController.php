<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Http\Requests\OrderReviewOrderRequest;
use App\Http\Requests\OrderServicesAddRequest;
use App\Http\Resources\Api\v2\OrderReviewOrderResource;
use App\Http\Resources\Collection\Api\v2\OrderReviewOrderCollection;
use App\OrderReviewOrder;
use App\Models\ServicePage;
use App\Order;
use App\Orders;
use Auth;
use function App\Helpers\userHasRole;

class OrderReviewOrderController extends BaseController
{
    private $permission_module_name = "order review";

    public function __construct()
    {
        $this->tableName = 'order_review_orders';
        parent::__construct();
    }

    public function index()
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        if (userHasRole(Auth::user(),['customer'])) {
            $data = new OrderReviewOrderCollection(
                OrderReviewOrder::where('user_id', Auth::user()->id)->orderBy('created_at', 'desc')->paginate($this->limit)
            );
            return $this->getResponse($data);
        }
        return $this->getAllData(OrderReviewOrderCollection::class, OrderReviewOrder::class);
    }



    public function store(OrderReviewOrderRequest $request)
    {
        $data = $request->validated();
       // $this->CheckDiscountIsExsist("store",$this->permission_module_name);
        try {
            $data['user_id'] = Auth::user()->id;
            $data['order_id'] = $this->saveOrder('consultant_order')->id;



            $final = OrderReviewOrder::create($data);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        return $this->getResponse($final, myTrans('add_success'), 200);
    }

    public function OrderServicesPage(OrderServicesAddRequest $request){


        $data = $request->all();
        // $this->CheckDiscountIsExsist("store",$this->permission_module_name);
         try {
             $data['service_id'] =$request['id'];

             $data['user_id'] =auth()->user()->id;

             $data['status'] =1;


             Orders::create(['user_id'=>auth()->user()->id,'type'=>'services-pages']);


             $final = ServicePage::create($data);




         } catch (\Exception $e) {
             self::throwException(__CLASS__, __LINE__, $e);
         }
         return $this->getResponse($final, myTrans('add_success'), 200);

    }

    public function show($id)
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        return $this->ShowCustomElement(OrderReviewOrder::class, $id, OrderReviewOrderResource::class, myTrans('resource_not_found'));
    }

    public function update(OrderReviewOrderRequest $request, $id)
    {
        $this->checkUserHasPermission("update",$this->permission_module_name);
        $data = $request->validated();
        $OrderReviewOrder = OrderReviewOrder::findOrFail($id);
        $this->checkIfUserCancelOrder($OrderReviewOrder , $data);

        try {
            $data['user_id'] = $OrderReviewOrder->user_id;
            $OrderReviewOrder->update($data);
            $OrderReviewOrder->order->update($data);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        return $this->getResponse(OrderReviewOrder::findOrFail($id), myTrans('update_success'), 200);
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);
        return $this->DeleteCustomElement(OrderReviewOrder::class, $id, myTrans('resource_not_found'));
    }
}
