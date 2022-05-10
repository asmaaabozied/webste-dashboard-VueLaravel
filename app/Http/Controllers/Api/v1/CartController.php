<?php

namespace App\Http\Controllers\Api\v1;

use App\CartProduct;
use App\Cart;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\BaseController;
use App\Http\Resources\Api\v1\CartResource;
use App\Http\Requests\CartRequest;

class CartController extends BaseController
{

    private $permission_module_name = "carts";
    function __construct()
    {
        $this->tableName = 'carts';
        parent::__construct();
    }

    public function index()
    {
        $cart= Cart::where('user_id', '=', Auth::user()->id)->first();
        if ($cart != null){
            return $this->getResponse($cart, 'retrieve cart info success', 200);
        }
        else{
            $cart = Cart::create([Auth::user()->id]);
            $cart_product = CartProduct::where('cart_id', '=', $cart['cart_id'])->first();
            return $this->getResponse($cart_product, 'add new cart to this employee and retrieve this cart info success ', 200);
        }
    }

    public function store(CartRequest $request)
    {
        $request->validated();
        $user = Auth::user();
        $input = $request->all();
        $input['user_id']=$user->id;

        $data=Cart::create($input);

        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    public function show($id)
    {
        $cart =  Cart::find($id);
        if (!is_null($cart)) {
            $this->checkUserHasPermission("show",$this->permission_module_name);
            return $this->getResponse(new CartResource($cart));
        } else {
            return $this->getResponse(null, $this->showMessage, true,404);
        }
    }

    public function update(CartRequest $request, $id)
    {
        $request->validated();
        $input = $request->all();
        $input['user_id'] = Auth::user()->id;
        $cart =  Cart::find($id);
        //check if this table has custom id
        if (!is_null($cart)) {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $cart->update($input);
            // if exist retrun resoponse this table with data wich has custom data
            return $this->getResponse(null , myTrans('update_success'), 200);

        } else {

            return $this->getResponse(null, myTrans('resource_not_found'), true, 404);
        }

    }

    public function destroy($id)
    {

        $cart =  Cart::find($id);
        //check if this table has custom id
        if (!is_null($cart)) {
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            $cartProducts = $cart->cartsProducts;
            foreach ($cartProducts as $cartsProduct) {
                $cartsProduct->delete();
            }
            $cart->delete();
            return $this->getResponse(null, myTrans('delete_success'), 200);
        } else {
            return $this->getResponse(null, myTrans('resource_not_found'), 400);
        }
    }
}
