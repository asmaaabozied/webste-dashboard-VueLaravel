<?php

namespace App\Http\Controllers\Api\v2;

use App\DiscountCode;
use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\DiscountCodeRequest;
use App\Http\Resources\Api\v2\DiscountCodeResource;
use Illuminate\Http\Request;

class DiscountCodeController extends BaseController
{
    private $pagination = 10;

    private $permission_module_name = "discount";

    public function __construct()
    {
        $this->tableName = 'discount_codes';
        parent::__construct();
    }

    public function index(Request $request)
    {
        try {
            $this->checkUserHasPermission("show", $this->permission_module_name);
            $this->page = ($request->page - 1) * 10;
            $DiscountCode = DiscountCode::all();
            if (isset($request->pagination)) {
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(DiscountCodeResource::collection($DiscountCode)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        // $data = DiscountCodeResource::collection(DiscountCode::getWithOrderByDesc());
        // return $this->getResponse($data);
    }

    public function store(DiscountCodeRequest $request)
    {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        if ($request->type == 0){
            if ($request->amount > 100){
                throw new PublicException(myTrans('cant_add_more_than_100'));
            }
        }


        $data = $request->validated();
        $final = DiscountCode::create($data);
        return $this->getResponse($final, myTrans('add_success'), 200);
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show specific",$this->permission_module_name);

        return $this->ShowCustomElement(DiscountCode::class, $id, DiscountCodeResource::class, myTrans('resource_not_found'));
    }

    public function update(DiscountCodeRequest $request, $id)
    {
        $this->checkUserHasPermission("update",$this->permission_module_name);

        if ($request->type == 0){
            if ($request->amount > 100){
                throw new PublicException(myTrans('cant_add_more_than_100'));
            }
        }


        // check if discount code has been taken from any order and if admin confirm answered as true system will accept
        // this request for update discount
        if (isset($request->ConfirmUpdate)) {
            if ($request->ConfirmUpdate) {
                return $this->UpdateCustomElement(DiscountCode::class, $id, $request, myTrans('resource_not_found'));
            }
        } else {
            if(isset(DiscountCode::find($id)->order))
            {
                return $this->getResponse([
                    'message' => myTrans('completely_answered_confirm')], 200);
            }
        return $this->UpdateCustomElement(DiscountCode::class, $id, $request, myTrans('resource_not_found'));
        }
    }

    public function destroy(Request $request, $id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);

        // check if discount code has been taken from any order and if admin confirm answered as true system will accept
        // this request for delete discount
        if (isset($request->ConfirmDelete)) {
            if ($request->ConfirmDelete) {
                return $this->DeleteCustomElement(DiscountCode::class, $id, myTrans('resource_not_found'));
            } else {
                if(isset(DiscountCode::find($id)->order))
                {
                    return $this->getResponse(['message' => myTrans('delete_completely_answered_confirm')], 200);
                }
            }
        }
        return $this->DeleteCustomElement(DiscountCode::class, $id, myTrans('resource_not_found'));
    }
}
