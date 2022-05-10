<?php

namespace App\Http\Controllers\Api\v1;

use App\Offer;
use App\Http\Controllers\BaseController;
use App\Http\Requests\OfferStoreRequest;
use App\Http\Requests\OfferEditRequest;

use App\Http\Resources\Api\v1\OfferResource;

/**
 * Class OfferController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v1
 */
class OfferController extends BaseController
{
    function __construct()
    {
        $this->tableName = 'offers';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = OfferResource::collection(Offer::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OfferStoreRequest $request)
    {

        $data=Offer::create($request->validated());
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
        return $this->ShowCustomElement(Offer::class, $id, OfferResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(OfferEditRequest $request, $id)
    {

        return $this->UpdateCustomElement(Offer::class, $id, $request, myTrans('resource_not_found'));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $offer =  Offer::find($id);
        //check if this table has custom id
        if (!is_null($offer)) {

            $offerProducts = $offer->offersProducts;
            foreach ($offerProducts as $offerProduct) {
                $offerProduct->delete();
            }
            $offer->delete();
            return $this->getResponse(null, myTrans('delete_success'), 200);
        } else {

            return $this->getResponse(null, myTrans('resource_not_found'), 400);
        }
    }

}
