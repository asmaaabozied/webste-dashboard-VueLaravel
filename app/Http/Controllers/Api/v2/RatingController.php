<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\RatingRequest;
use App\Http\Resources\Api\v2\RatingRecource;
use App\Order;
use App\Rating;
use Illuminate\Support\Facades\Auth;

class RatingController extends BaseController
{
    private $permission_module_name = "rating";

    public function __construct()
    {
        $this->tableName = 'ratings';
        parent::__construct();
    }

    public function index()
    {
        $data = RatingRecource::collection(Rating::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    public function store(RatingRequest $request)
    {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        $data = $request->validated();
        $order = Order::find($request->order_id);
        if (isset($order)){
            if (isset($order->rating)){
                throw new PublicException(myTrans('order_already__evaluated'));
            }
        }else{
            throw new PublicException(myTrans('order_not_exist'));
        }
        $data['user_id'] = Auth::user()->id;
        $final = Rating::create($data);
        return $this->getResponse($final, myTrans('add_success'), 200);
    }

    public function show($id)
    {
        return $this->ShowCustomElement(Rating::class, $id, RatingRecource::class, myTrans('resource_not_found'));
    }

    public function update(RatingRequest $request, $id)
    {

        $data = $request->validated();
        $data['user_id'] = Auth::user()->id;
        $final = Rating::find($id)->update($data);
        return $this->getResponse($final, myTrans('update_success'), 200);
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy",$this->permission_module_name);
        return $this->DeleteCustomElement(Rating::class, $id, myTrans('resource_not_found'));
    }
}
