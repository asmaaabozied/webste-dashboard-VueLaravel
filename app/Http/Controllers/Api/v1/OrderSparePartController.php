<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Requests\WorkInRequest;

use App\OrderSparePart;
use App\Http\Controllers\BaseController;
use App\Http\Requests\NeededSparePartRequest;
use App\Http\Resources\Api\v1\NeededSparePartResource;


/**
 * Class OrderSparePartController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v1
 */
class OrderSparePartController extends BaseController
{
    /**
     * OrderSparePartController constructor.
     * @throws \App\Exceptions\PublicException
     */
    function __construct()
    {
        $this->tableName = 'order_spare_parts';
        parent::__construct();
    }

    /**
     * @author karam mustafa
     * @var int
     */
    public $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = NeededSparePartResource::collection(OrderSparePart::getWithOrderByDesc());
        return $this->getResponse($data);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NeededSparePartRequest $request)
    {

        $request->validated();
        $input = $request->all();
        $orderPart = OrderSparePart::where('order_id', '=', $input['order_id'], ' and')->where('spare_id', '=', $input['spare_id'])->first();

        if (!is_null($orderPart)) {
            return $this->getResponse(['message' =>myTrans('already_have_part')], 400);
        }
        $data =  OrderSparePart::create($input);
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
        return $this->ShowCustomElement(OrderSparePart::class, $id, NeededSparePartResource::class, myTrans('resource_not_found'));
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param WorkInRequest $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkInRequest $request)
    {
        $model_check = OrderSparePart::where('order_id', '=', $request->input('order_id'), ' and')->where('spare_id', '=', $request->input('spare_id'))->first();
        //check if this table has custom id
        if (!is_null($model_check)) {
            $model_check = OrderSparePart::where('order_id', '=', $request->input('order_id'), ' and')->where('spare_id', '=', $request->input('spare_id'))->delete();

            // if exist return response this table with data which has custom data
            return $this->getResponse(null, myTrans('delete_success'), 200);
        } else {
            return $this->getResponse(null, myTrans('resource_not_found'), 400);
        }
    }
}
