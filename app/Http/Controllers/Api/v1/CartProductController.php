<?php

namespace App\Http\Controllers\Api\v1;

use App\CartProduct;
use App\Exceptions\PublicException;
use App\Product;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CartProductStoreRequest;
use App\Http\Requests\CartProductEditRequest;
use App\Cart;
use App\Http\Resources\Api\v1\CartProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartProductController extends BaseController
{
    private $permission_module_name = "cart products";

    function __construct()
    {
        $this->tableName = 'cart_products';
        parent::__construct();
    }

    function getCart()
    {
        $role = Auth::user()->role;
        if ($role != 'admin' and $role != 'manager' and $role != 'sales_manager' and $role != 'customer') {
            throw new PublicException(myTrans('cart_not_found'));
        }
        $user_id = Auth::user()->id;
        $cart = Cart::where('user_id', '=', $user_id, 'and')->where('is_used', '=', 0)->latest()->first();
        if (!$cart) {
            $d['user_id'] = $user_id;
            Cart::create($d);
            return array('cart' => [], 'total' => '0');
        }
        $data = CartProductResource::collection(CartProduct::orderBy('created_at', 'desc')->where('cart_id', '=', $cart->id)->getWithOrderByDesc());
        foreach ($data as $item) {
            $prod = Product::where('id', '=', $item->product_id)->getWithOrderByDesc()->first();
            $item->setAttribute('product', $prod);
        }
        $total = 0;
        foreach ($data as $item) {
            if ($item->product->offerType == 1) {
                $total += (((float)$item->product->price - $item->product->offer_rateOrAmount) * $item->quantity);
                $item->product->setAttribute('priceAfterOffer', (float)$item->product->price - $item->product->offer_rateOrAmount);
            } else if ($item->product->offerType == 0) {
                $newPrice = $item->product->price - ($item->product->price * ($item->product->offer_rateOrAmount / 100));
                $total += $newPrice * $item->quantity;
                $item->product->setAttribute('priceAfterOffer', $newPrice);
            } else {
                $item->product->setAttribute('priceAfterOffer', $item->product->price);
            }
            // $item = ['quantity' =>$item->quantity,'product' => $item->product];
        }
        $total = number_format((float)$total, 2, '.', '');
        return array('cart' => $data, 'total' => $total);
    }

    public function index()
    {
        return $this->getResponse($this->getCart());
    }

    public function store(CartProductStoreRequest $request)
    {
        try {
            $request->validated();
            $input = $request->all();
            $user = Auth::user();
            $getCart = Cart::where('user_id', $user->id)->first();
            if (!isset($getCart)) {
                $this->getCart();
            }
            $input['cart_id'] = $getCart['id'];
            $cart_product = CartProduct::where('product_id', '=', $input['product_id'], ' and')->where('cart_id', '=', $input['cart_id'])->first();
            if (!is_null($cart_product)) {
                $product = $cart_product->product;

                if ($product->quantity < ($cart_product->quantity + $input['quantity'])) {
                    return $this->getResponse(null, myTrans('products_out'), 400);
                }
                $input['quantity'] = $input['quantity'] + $cart_product->quantity;
                CartProduct::where('product_id', '=', $input['product_id'], ' and')
                    ->where('cart_id', '=', $input['cart_id'])
                    ->update(['quantity' => $input['quantity']]);
//                $updateProdQuantity = Product::find($input['product_id']);
//                $ProdQuantity = $updateProdQuantity->quantity;
//                $updateProdQuantity->update(['quantity' => ($ProdQuantity - $input['quantity'])]);
                // if exist retrun resoponse this table with data wich has custom data
                return $this->getResponse(['message' => myTrans('add_new_quantity_success')], 200);
            }

            $product = Product::where('id', '=', $input['product_id'])->first();
            if ($product->quantity < $input['quantity']) {
                return $this->getResponse(null, myTrans('products_out'), 400);
            }
            $data = CartProduct::create($input);
//            $updateProdQuantity = Product::find($input['product_id']);
//            $ProdQuantity = $updateProdQuantity->quantity;
//            $updateProdQuantity->update(['quantity' => ($ProdQuantity - $input['quantity'])]);
            return $this->getResponse($data, myTrans('add_success'), 200);
        } catch (\Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function addProductToCart(CartProductStoreRequest $request)
    {
        $role = Auth::user()->role;
        if ($role != 'customer') {
            throw new PublicException(myTrans('you_cant_add_product'));
        }
        $request->validated();
        $input = $request->all();
        $user_id = Auth::user()->id;

        $cart = Cart::where(['user_id' => $user_id, 'is_used' => false])->latest()->first();

        if (!isset($cart)) $cart = Cart::create(['user_id' => $user_id]);

        $product = Product::where('id', '=', $input['product_id'])->first();
        if (!$product) {
            return $this->getResponse(null, myTrans('product_not_found'), 404);
        }
        $countProductInTransaction = CartProduct::where('product_id', $product->id)->getWithOrderByDesc();
        $countCollect = collect($countProductInTransaction)->pluck('quantity')->sum();
        if ($product->quantity < $input['quantity'] || $product->quantity < $countCollect) {
            return $this->getResponse(null, myTrans('products_out'), 400);
        }

        $input['cart_id'] = $cart->id;
        $cps = CartProduct::where('cart_id', '=', $cart->id)->getWithOrderByDesc();
        foreach ($cps as &$value) {
            if ($value->product_id == $input['product_id']) {
                return $this->getResponse(null , myTrans('already_add_to_product'), 400);
            }
        }
        $cp = CartProduct::where(['cart_id' => $cart->id, 'product_id' => $product->id])->first();
        $data = isset($cp) ? $cp : CartProduct::create($input);

        return $this->getResponse($this->getCart(), myTrans('add_success'), 200);
    }

    public function show(CartProductStoreRequest $request)
    {
        $role = Auth::user()->role;
        if ($role != 'admin' and $role != 'manager' and $role != 'sales_manager' and $role != 'customer') {
            throw new PublicException(
                'you cant show product in cart'
            );
        }
        $request->validated();
        $input = $request->all();
        $cart_product = CartProduct::where('product_id', '=', $input['product_id'], ' and')->where('cart_id', '=', $input['cart_id'])->first();
        if (!is_null($cart_product)) {
            $this->checkUserHasPermission("show",$this->permission_module_name);
            return $this->getResponse(new CartProductResource($cart_product));
        } else {
            return $this->getResponse(myTrans('no_data_return'), myTrans('resource_not_found'),400);
        }
    }

    public function UpdateProductsInCart(CartProductEditRequest $request)
    {
        $role = Auth::user()->role;
        if ($role != 'customer') {
            throw new PublicException(myTrans('you_cant_update_product'));
        }
        $request->validated();
        $input = $request->all();
        $user_id = Auth::user()->id;
        $cart = Cart::where(['user_id' => $user_id, 'is_used' => '0'])->first();
        if (!isset($cart)) {
            return $this->getResponse(null, myTrans('undefined_cart_for_user'), 400);
        }
        $product = Product::where('id', '=', $input['product_id'])->first();
        $countProductInTransaction = CartProduct::where('product_id', $input['product_id'])
            ->where('cart_id', '!=', $cart->id)
            ->getWithOrderByDesc();
        $countCollect = collect($countProductInTransaction)->pluck('quantity')->sum();
        if ($product->quantity < $countCollect || $product->quantity < ($input['quantity'] + $countCollect)) {
            return $this->getResponse(null, myTrans('products_out'), 400);
        }

        $cart_product = CartProduct::where(['cart_id' => $cart->id, 'product_id' => $input['product_id']])->first();
        if (!isset($cart_product)) {
            return $this->getResponse(null, myTrans('dont_have_product__cart'), 400);
        }
        if ($request->has('product_id')) {
            $product = Product::where('id', '=', $input['product_id'])->first();
            if (!$product) {
                return $this->getResponse(null, myTrans('undefined_this_product'), 400);
            }
//            if ($request->has('quantity')) {
            if ($product->quantity < ($input['quantity'])) {
                return $this->getResponse(null, myTrans('products_out'), 400);
            }

//                    if ($request->has('cart_id')) {
            CartProduct::where('product_id', '=', $input['product_id'], ' and')
                ->where('cart_id', '=', $cart->id)
                ->update([
                    'quantity' => $input['quantity']
                ]);

//                $data = Cart::where('user_id', '=', $user_id)->first();
            return $this->getResponse($this->getCart(), myTrans('update_success'), 200);
//                    }
//                }
        } else {
            return $this->getResponse(myTrans('product_not_update'));
        }

    }

    public function removeProductFromCart(CartProductEditRequest $request)
    {
        $role = Auth::user()->role;
        if ($role != 'customer') {
            throw new PublicException('you_cant_delete_product');
        }
        $request->validated();
        $input = $request->all();
        $user_id = Auth::user()->id;
        $cart = Cart::where('user_id', $user_id)->where('is_used', 0)->first();
        if (!$cart) {
            return $this->getResponse(null, myTrans('error_with_cart'), 400);
        }
        $cart_product = CartProduct::where('product_id', $input['product_id'])->where('cart_id', $cart->id)->first();
        if (!$cart_product) {
            return $this->getResponse(null, myTrans('product_not_in_cart'), 400);
        }
//        $cart_product->product->update(['quantity' => ($cart_product->quantity + $cart_product->product->quantity)]);
        CartProduct::where('product_id', '=', $input['product_id'], 'and')->where('cart_id', '=', $cart->id)->delete();
        return $this->getResponse($this->getCart(), myTrans('delete_success'), 200);
    }

    public function deleteCart(Request $request)
    {
        $role = Auth::user()->role;
        if ($role != 'customer') {
            throw new PublicException(myTrans('you_cant_delete_product'));
        }
        $user_id = Auth::user()->id;
        $cart = Cart::where('user_id', '=', $user_id)->first();
        if (!$cart) {
            return $this->getResponse(null, myTrans('error_with_cart'), 400);
        }
        $cart_product = CartProduct::where('cart_id', '=', $cart->id)->first();
        if (!$cart_product) {
            return $this->getResponse(null, myTrans('error_with_cart_product'), 400);
        }
        foreach ($cart_product as $cartProduct) {
            $cartProduct->delete();
        }
        $cart->delete();
        return $this->getResponse(null, myTrans('resource_not_found'), 400);
    }
}



