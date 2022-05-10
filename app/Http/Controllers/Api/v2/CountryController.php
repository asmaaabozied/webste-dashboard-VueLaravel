<?php

namespace App\Http\Controllers\Api\v2;

use App\countryInx;
use App\Helpers\Permissions;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CountryRequest;
use App\Http\Requests\onlyNameRequest;
use App\Http\Resources\Api\v2\CountryResource;
use App\Http\Resources\Api\v2\onlyNameResource;
use Illuminate\Http\Request;

/**
 * Class CountryController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v2
 */
class CountryController extends BaseController
{

    public function __construct()
    {
        $this->tableName = 'country_inxes';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = CountryResource::collection(countryInx::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CountryRequest $request)
    {
        $data = countryInx::create($request->validated());
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
        return $this->ShowCustomElement(countryInx::class, $id, CountryResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CountryRequest $request, $id)
    {
        return $this->UpdateCustomElement(countryInx::class, $id, $request, myTrans('resource_not_found'));
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
        return $this->DeleteCustomElement(countryInx::class, $id, myTrans('resource_not_found'));
    }
}
