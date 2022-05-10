<?php

namespace App\Http\Controllers\Api\v2;

use App\countryInx;
use App\Http\Controllers\BaseController;
use App\Http\Resources\Api\v2\CountryResource;

class AllCountryController extends BaseController
{
    public function __construct()
    {
        $this->useConstrcut = false;
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
}
