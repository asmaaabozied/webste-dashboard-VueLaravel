<?php

namespace App\Http\Controllers\Api\v1;

use App\Exceptions\PublicException;
use App\Product;
use App\Http\Resources\Api\v1\ProductResource;
use App\Http\Controllers\BaseController;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductEditRequest;
use Illuminate\Http\Request;

class ProductController extends BaseController
{
    private $path                   = 'files/images/product_images';
    private $permission_module_name = "products";
    private $pagination = 10;
    function __construct()
    {
        $this->tableName = 'products';
        parent::__construct();
    }

    public function index(Request $request)
    {
        try {
            $this->page = ($request->page - 1) * 10;
            $Product = Product::all();
            if (isset($request->pagination)) {
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(ProductResource::collection($Product)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

        // $data = ProductResource::collection(Product::getWithOrderByDesc());
        // return $this->getResponse($data);
    }

    public function store(ProductStoreRequest $request)
    {
        try {
            $this->checkUserHasPermission("store",$this->permission_module_name);
            $data = $request->validated();
            $this->checkRequest($request);
            $data['image'] = $this->SaveFile($request->image, 'image', null, $this->path);
            $final = Product::create($data);
            return $this->getResponse($final);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function show($id)
    {
        return $this->ShowCustomElement(Product::class, $id, ProductResource::class, myTrans('resource_not_found'));
    }

    public function update(ProductEditRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $product = Product::findOrFail($id);
            $data = $request->validated();
            $this->checkRequest($request);
            if (isset($data['image'])) {
                $data['image'] = $this->SaveFile($request->image, 'image', null, $this->path);
            }
            $product->update($data);
            return $this->getResponse(myTrans('update_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function destroy($id)
    {
        try {
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            error_log('Some message here.');
            $product = Product::find($id);
            if (!is_null($product)) {
                $cartsProducts = $product->cartsProducts;
                if (!isset($cartsProducts[0])) {
                    $offersProducts = $product->offer_rateOrAmount;
                    if (is_array($offersProducts) || is_object($offersProducts)) {
                        foreach ($offersProducts as $offersProduct) {
                            $offersProduct->delete();
                        }
                    }
                    $product->delete();
                    return $this->getResponse(null, myTrans('delete_success'), 200);
                } else {
                    return $this->getResponse(null, myTrans('product_can_not_be_deleted_is_used'), 400);
                }
            } else {
                return $this->getResponse(null, myTrans('resource_not_found'), 400);
            }
        } catch (\Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    private function checkRequest($request)
    {
        try {
            if (!$request->has('offerType') && $request->has('offer_rateOrAmount')) {
                throw new PublicException(myTrans('offer_type_required'));
            }
            if ($request->has('offerType') && !$request->has('offer_rateOrAmount')) {
                throw new PublicException(myTrans('offer_rate_or_amount_required'));
            }
            if (($request->offerType == 0) && ($request->offer_rateOrAmount > 100)) {
                throw new PublicException(myTrans('rate_more_than_100'));
            }
            if (($request->offerType == 1) && ($request->offer_rateOrAmount > $request->price)) {
                throw new PublicException('offer_more_than_rate');
            }
        } catch (\Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

}
