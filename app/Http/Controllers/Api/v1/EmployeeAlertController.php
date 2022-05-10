<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Resources\Api\v1\EmployeeAlertResource;
use App\Http\Requests\EmployeeAlertRequest;
use App\Http\Controllers\BaseController;
use App\Employee_alert;

/**
 * Class EmployeeAlertController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v1
 */
class EmployeeAlertController extends BaseController
{
    function __construct()
    {
        $this->useConstrcut = false;
        parent::__construct();
    }
    public $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = EmployeeAlertResource::collection(Employee_alert::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeAlertRequest $request)
    {
        $data = Employee_alert::create($request->validated());
        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->ShowCustomElement(Employee_alert::class, $id, EmployeeAlertResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeAlertRequest $request, $id)
    {
        return $this->UpdateCustomElement(Employee_alert::class, $id, $request, myTrans('resource_not_found'));
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
        return $this->DeleteCustomElement(Employee_alert::class, $id, myTrans('resource_not_found'));
    }
}
