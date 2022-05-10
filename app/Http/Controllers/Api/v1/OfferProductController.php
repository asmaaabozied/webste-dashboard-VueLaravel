<?php

namespace App\Http\Controllers\Api\v1;


use App\OfferProduct;
use App\Http\Controllers\BaseController;
use App\Http\Requests\OfferProductStoreRequest;

use App\Http\Resources\Api\v1\OfferProductResource;

/**
 * Class OfferProductController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v1
 */
class OfferProductController extends BaseController
{
    function __construct()
    {
        $this->tableName = 'offer_products';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = OfferProductResource::collection(OfferProduct::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(OfferProductStoreRequest $request)
    {

        $request->validated();
        $input = $request->all();
        $offerProduct = OfferProduct::where('offer_id', '=', $request->input('offer_id'), ' and')->where('product_id', '=', $request->input('product_id'))->first();
        if (!is_null($offerProduct)) {
            return $this->getResponse(['message' => myTrans('is_already_work_in')], 400);
        }
        $data =  OfferProduct::create($request->validated());
        return $this->getResponse($data, myTrans('add_success'), 200);

    }

    public function destroy(OfferProductStoreRequest $request)
    {

        $request->validated();
        $input = $request->all();
        $offerProduct = OfferProduct::where('offer_id', '=', $request->input('offer_id'), ' and')
            ->where('product_id', '=', $request->input('product_id'))->delete();
            return $this->getResponse(null, myTrans('delete_success'), 200);
      }

    /**
     * Display the specified resource.
     *
     * @param OfferProductStoreRequest $request
     * @return \Illuminate\Http\Response
     */
    public function show(OfferProductStoreRequest $request)
    {
        $request->validated();
        $input = $request->all();
        $offerProduct = OfferProduct::where('offer_id', '=', $request->input('offer_id'), ' and')->where('product_id', '=', $request->input('product_id'))->first();
        if (!is_null($offerProduct)) {
            return $this->getResponse(new OfferProductResource($offerProduct));
        } else {
            return $this->getResponse(myTrans('no_data_return'), myTrans('resource_not_found'),400);
        }
    }
}
