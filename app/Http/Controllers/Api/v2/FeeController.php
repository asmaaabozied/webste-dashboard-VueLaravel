<?php

namespace App\Http\Controllers\Api\v2;

use App\Fee;
use App\Http\Controllers\BaseController;
use App\Http\Requests\FeeRequest;
use App\Http\Resources\Api\v2\FeeResource;
use Illuminate\Http\Request;

class FeeController extends BaseController
{
    private $pagination             = 10;
    private $permission_module_name = "fees";

    public function __construct()
    {
        $this->tableName = 'fees';
        parent::__construct();
    }

    public function index(Request $request)
    {
        try{
            $this->checkUserHasPermission("show",$this->permission_module_name);
			$this->page = ($request->page-1)*10;
            $Fee = Fee::all();
            if(isset($request->pagination)){
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(FeeResource::collection($Fee)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        // $data = FeeResource::collection(Fee::getWithOrderByDesc());
        // return $this->getResponse($data);
    }

    public function store(FeeRequest $request)
    {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        $data = $request->validated();
        $final = Fee::create($data);
        return $this->getResponse($final, myTrans('add_success'), 200);
    }

    public function show($id)
    {
        return $this->ShowCustomElement(Fee::class, $id, FeeResource::class, myTrans('resource_not_found'));
    }

    public function update(FeeRequest $request, $id)
    {
        $this->checkUserHasPermission("update", $this->permission_module_name);

        return $this->UpdateCustomElement(Fee::class, $id, $request, myTrans('resource_not_found'));
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);

        return $this->DeleteCustomElement(Fee::class, $id, myTrans('resource_not_found'));
    }
}
