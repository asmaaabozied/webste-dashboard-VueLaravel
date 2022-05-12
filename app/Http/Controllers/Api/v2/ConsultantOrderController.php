<?php

namespace App\Http\Controllers\Api\v2;

use App\ConsultantOrder;
use App\ConsultantOrders;
use App\Http\Controllers\BaseController;
use App\Http\Requests\ConsultantOrderRequest;
use App\Http\Resources\Api\v2\ConsultantOrderResource;
use App\Http\Resources\Collection\Api\v2\ConsultantOrderCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class ConsultantOrderController extends BaseController
{
    private $permission_module_name="consultant order";

    public function __construct()
    {
        $this->useConstrcut = false;
        $this->tableName = 'consultant_orders';
        parent::__construct();
    }

    public function index()
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        if (userHasRole(Auth::user(),['customer'])) {
            return $this->getByRole(['user_id' => Auth::user()->id]);
        }
        if (userHasRole(Auth::user(),['consulting_employee'])) {
            return $this->getByRole(['status' => 2]);
        }
        if (userHasRole(Auth::user(),array_merge(mainManagerRoles(), ['consulting_manager']))) {
            return $this->getByRole(['type' => 'consultant_order']);
        }
        return $this->getAllData(ConsultantOrderCollection::class, ConsultantOrder::class);
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show specific",$this->permission_module_name);
        return $this->ShowCustomElement(ConsultantOrder::class, $id, ConsultantOrderResource::class, myTrans('resource_not_found'));
    }

    public function update(ConsultantOrderRequest $request, $id)
    {
        $this->checkUserHasPermission("update",$this->permission_module_name);

        $data = $request->validated();
        $ConsultantOrder = ConsultantOrder::findOrFail($id);
        $this->checkIfUserCancelOrder($ConsultantOrder, $data);
        try {
            $ConsultantOrder->update($data);
            $ConsultantOrder->order->update($data);
            return $this->getResponse($ConsultantOrder, myTrans('add_success'), false, 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function store(Request $request)
    {





    try {
        $final = DB::transaction(function () use ($request) {
            $this->checkUserHasPermission("store",$this->permission_module_name);
            $data = $request->all();
            if($request->id=4){
                $data['order_id'] = $this->saveOrder('consultant_order')->id;

                return ConsultantOrder::create($data);

        }else{
     $ConsultantOrder= ConsultantOrder::find($request->id);
     $ConsultantOrder->description=$request->description;
    $ConsultantOrder->save();

        }


        });
        return $this->getResponse($final, myTrans('add_success'), false, 200);
    } catch (\Exception $e) {
        self::throwException(__CLASS__, __LINE__, $e);
    }



    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy",$this->permission_module_name);
        return $this->DeleteCustomElementFromRelation(ConsultantOrder::class, $id, 'order', myTrans('resource_not_found'));
    }

    private function getByRole(array $whereCloser)
    {
        $data = new ConsultantOrderCollection(ConsultantOrder::
        whereHas('order', function ($q) use ($whereCloser) {
            return $q->where($whereCloser);
        })
            ->orderBy('created_at', 'desc')->paginate($this->limit));

        if (isset($whereCloser['status']) && $whereCloser['status'] == 2) {
            $data = new ConsultantOrderCollection(ConsultantOrder::
            whereHas('order', function ($q) use ($whereCloser) {
                return $q->where($whereCloser);
            })->join('order_employees', function($join) {
                return $join->on('consultant_orders.order_id', '=', 'order_employees.order_id')
                    ->where('order_employees.employee_id', Auth::user()->id);
            })
                ->orderBy('consultant_orders.created_at', 'desc')->paginate($this->limit));
        }
        return $this->getResponse($data);
    }
}
