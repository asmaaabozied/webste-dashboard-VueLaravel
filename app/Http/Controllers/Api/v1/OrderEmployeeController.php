<?php

namespace App\Http\Controllers\Api\v1;

use App\OrderEmployee;
use App\Http\Controllers\BaseController;
use App\Http\Requests\OrderEmployeeRequest;
use App\Http\Resources\Api\v1\OrderEmployeeResource;

class OrderEmployeeController extends BaseController
{
    private $permission_module_name = "order Employee";

    function __construct()
    {
        $this->tableName = 'order_employees';
        parent::__construct();
    }

    public function index()
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        $data = OrderEmployeeResource::collection(OrderEmployee::getWithOrderByDesc());
        return $this->getResponse($data);
    }


    public function store(OrderEmployeeRequest $request)
    {

        $request->validated();
        $orderEmployee = OrderEmployee::where('employee_id', '=', $request->input('employee_id'), ' and')->where('order_id', '=', $request->input('order_id'))->first();
        if (!is_null($orderEmployee)) {
            $this->checkUserHasPermission("store",$this->permission_module_name);
            return $this->getResponse(null,'is already work in', 400);
        }
        $orderEmployee =new OrderEmployee;
        $orderEmployee->employee_id=$request->input('employee_id');
        $this->checkUserHasPermission("store",$this->permission_module_name);

        $data =  OrderEmployee::create($request->validated());
        return $this->getResponse($data, myTrans('add_success'), 200);

    }

    /**
     * @param OrderEmployeeRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @author karam mustafa
     */
    public function destroy(OrderEmployeeRequest $request)
    {

        $request->validated();
        $input = $request->all();
            $orderEmployee = OrderEmployee::where('employee_id', '=', $request->input('employee_id'), ' and')->where('order_id', '=', $request->input('order_id'))->first();
            if (!is_null($orderEmployee)) {

                $this->checkUserHasPermission("destroy",$this->permission_module_name);
                $orderEmployee = OrderEmployee::where('employee_id', '=', $request->input('employee_id'), ' and')
                ->where('order_id', '=', $request->input('order_id'))->delete();
                return $this->getResponse(null, myTrans('delete_success'), 200);
            }
            return $this->getResponse(null, 'can not finde it', 404);


      }

    /**
     * Display the specified resource.
     *
     * @param OrderEmployeeRequest $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show(OrderEmployeeRequest $request)
    {
        $request->validated();
        $input = $request->all();
        $orderEmployee = OrderEmployee::where('employee_id', '=',
         $request->input('employee_id'), ' and')
         ->where('order_id', '=', $request->input('order_id'))->first();
        if (!is_null($orderEmployee)) {
            $this->checkUserHasPermission("show",$this->permission_module_name);

            // if exist return response this table with data wich has custom data
            return $this->getResponse(new OrderEmployeeResource($orderEmployee));
        } else {
            return $this->getResponse(myTrans('no_data_return'), myTrans('resource_not_found'),400);
        }
    }
}
