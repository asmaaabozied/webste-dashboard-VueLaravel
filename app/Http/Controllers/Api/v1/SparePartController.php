<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Resources\Api\v1\SpareParteResource;
use App\Http\Controllers\BaseController;
use App\Http\Requests\SpareParteRequest;
use App\Http\Requests\SpareParteEditRequest;
use App\SparePart;
use Illuminate\Http\Request;


class SparePartController extends BaseController
{
    private $pagination = 10;

    private $permission_module_name = "spare part";

    function __construct()
    {
        $this->tableName = 'spare_parts';
        parent::__construct();
    }

    public function index(Request $request)
    {
        try {
            $this->page = ($request->page - 1) * 10;
            $SparePart = SparePart::orderBy('id', 'desc')->get();
            if (isset($request->pagination)) {
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(SpareParteResource::collection($SparePart)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        // $data = SpareParteResource::collection(SparePart::getWithOrderByDesc());
        // return $this->getResponse($data);
    }

    public function store(SpareParteRequest $request)
    {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        $data = SparePart::create($request->validated());
        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);

        return $this->ShowCustomElement(SparePart::class, $id, SpareParteResource::class, myTrans('resource_not_found'));
    }

    public function update(SpareParteEditRequest $request, $id)
    {
        $this->checkUserHasPermission("update",$this->permission_module_name);

        return $this->UpdateCustomElement(SparePart::class, $id, $request, myTrans('resource_not_found'));
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy",$this->permission_module_name);

        return $this->DeleteCustomElement(SparePart::class, $id, myTrans('resource_not_found'));
    }
}
