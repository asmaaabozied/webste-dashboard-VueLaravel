<?php

namespace App\Http\Controllers\Api\v2;

use App\Customer;
use App\CustomerAlert;
use App\Helpers\Permissions;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CustomerAlertRequest;
use App\Http\Resources\Api\v2\CustomerAlertRecource;


class CustomerAlertController extends BaseController
{

    public function __construct()
    {
        $this->tableName = 'customer_alerts';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = CustomerAlertRecource::collection(CustomerAlert::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CustomerAlertRequest $request)
    {
        $data = $request->validated();
        $data['customer_id'] = Customer::first()->id;
        $final =CustomerAlert::create($data);
        return $this->getResponse($final, myTrans('add_success'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        return $this->ShowCustomElement(CustomerAlert::class, $id, CustomerAlertRecource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CustomerAlertRequest $request, $id)
    {
        $request['customer_id'] = Customer::first()->id;
        return $this->UpdateCustomElement(CustomerAlert::class, $id, $request, myTrans('resource_not_found'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \App\Exceptions\PublicException
     */
    public function destroy($id)
    {
        return $this->DeleteCustomElement(CustomerAlert::class, $id, myTrans('resource_not_found'));
    }
}
