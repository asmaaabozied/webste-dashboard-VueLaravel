<?php

namespace App\Http\Controllers\Api\v1;

use App\Exceptions\PublicException;
use App\ProductCategory;
use App\Http\Resources\Api\v1\CategoryResource;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryEditRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductCategoryController extends BaseController
{

    private $path                   = 'files/images/product_category';
    private $pagination             = 10;
    private $permission_module_name = "products categories";

    function __construct()
    {
        $this->tableName = 'product_categories';
        parent::__construct();
    }

    public function index(Request $request)
    {
        try {
            $this->page = ($request->page - 1) * 10;
            $ProductCategory = ProductCategory::all();
            if (isset($request->pagination)) {
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(CategoryResource::collection($ProductCategory)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        // try {
        //     $data = CategoryResource::collection(ProductCategory::getWithOrderByDesc());
        //     return $this->getResponse($data);
        // } catch (\Exception $e) {
        //     self::throwException(__CLASS__, __LINE__, $e);
        // }
    }

    public function store(CategoryStoreRequest $request)
    {
        try {
            $this->checkUserHasPermission("store",$this->permission_module_name);
            $data = $request->validated();
            $data['image'] = $this->SaveFile($request->image, 'image', null, $this->path);
            $result = ProductCategory::create($data);
            return $this->getResponse($result, myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function show($id)
    {
        return $this->ShowCustomElement(ProductCategory::class, $id, CategoryResource::class, myTrans('resource_not_found'));
    }

    public function update(CategoryEditRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $data = $request->validated();
            $ProductCategory = ProductCategory::findOrFail($id);
            if (isset($data['image'])) {
                $data['image'] = $this->SaveFile($request->image, 'image', null, $this->path);
            }
            $ProductCategory->update($data);
            return $this->getResponse($ProductCategory, myTrans('update_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function destroy($id)
    {
        try {
            $this->checkUserHasPermission("destroy",$this->permission_module_name);

            $category = ProductCategory::find($id);
            if (!is_null($category)) {
                $products = $category->products;
                if (!isset($products[0])) {
                    File::delete('category_images/' . $category->image);
                    $category->delete();
                    return $this->getResponse(null, myTrans('delete_success'), 200);
                } else {
                    return $this->getResponse(null, myTrans('category_not_empty'), 400);
                }
                // if exist return response this table with data which has custom data
            } else {
                return $this->getResponse(null, myTrans('resource_not_found'), 400);
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

}
