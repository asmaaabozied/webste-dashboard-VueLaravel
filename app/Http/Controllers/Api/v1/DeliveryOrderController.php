<?php

namespace App\Http\Controllers\Api\v1;

use App\DeliveryOrder;
use App\Http\Controllers\BaseController;
use App\Http\Requests\DeliveryStoreRequest;
use App\Http\Requests\DeliveryEditRequest;

use App\Http\Resources\Api\v1\DeliveryResource;

class DeliveryOrderController extends BaseController
{
    function __construct()
    {
        $this->tableName = 'delivery_orders';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DeliveryResource::collection(DeliveryOrder::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DeliveryStoreRequest $request)
    {
        $data = $request->validated();
        $data['location'] = json_encode([
            "lat" => $data['lat'],
            "lon" => $data['lon'],
        ]);

        $final = DeliveryOrder::create($data);

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
        return $this->ShowCustomElement(DeliveryOrder::class, $id, DeliveryResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DeliveryEditRequest $request, $id)
    {
        return $this->UpdateCustomElement(DeliveryOrder::class, $id, $request, myTrans('resource_not_found'));
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
        return $this->DeleteCustomElement(DeliveryOrder::class, $id, myTrans('resource_not_found'));
    }
}
