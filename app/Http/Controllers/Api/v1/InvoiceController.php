<?php

namespace App\Http\Controllers\Api\v1;

use App\Invoice;
use App\Http\Controllers\BaseController;
use App\Http\Requests\InvoiceStoreRequest;
use App\Http\Requests\InvoiceEditRequest;

use App\Http\Resources\Api\v1\InvoiceResource;

/**
 * Class InvoiceController
 * @author marah jalbot
 * @package App\Http\Controllers\Api\v1
 */
class InvoiceController extends BaseController
{
    function __construct()
    {
        $this->tableName = 'invoices';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = InvoiceResource::collection(Invoice::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InvoiceStoreRequest $request)
    {
        $data=Invoice::create($request->validated());
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
        return $this->ShowCustomElement(Invoice::class, $id, InvoiceResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(InvoiceEditRequest $request, $id)
    {
        return $this->UpdateCustomElement(Invoice::class, $id, $request, myTrans('resource_not_found'));
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
        return $this->DeleteCustomElement(Invoice::class, $id, myTrans('resource_not_found'));
    }
}
