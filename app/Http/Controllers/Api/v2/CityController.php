<?php

namespace App\Http\Controllers\Api\v2;

use App\cityInx;
use App\Helpers\Permissions;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CityRequest;
use App\Http\Requests\onlyNameRequest;
use App\Http\Resources\Api\v2\CityResource;
use App\Http\Resources\Api\v2\onlyNameResource;

/**
 * Class CityController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v2
 */
class CityController extends BaseController
{
    public function __construct()
    {
        $this->tableName = 'city_inxes';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = CityResource::collection(cityInx::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CityRequest $request)
    {
        $data = cityInx::create($request->validated());
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
        return $this->ShowCustomElement(cityInx::class, $id, CityResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CityRequest $request, $id)
    {
        return $this->UpdateCustomElement(cityInx::class, $id, $request, myTrans('resource_not_found'));
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
        return $this->DeleteCustomElement(cityInx::class, $id, myTrans('resource_not_found'));
    }
}
