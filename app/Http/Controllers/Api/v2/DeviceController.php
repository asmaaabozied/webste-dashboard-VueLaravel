<?php

namespace App\Http\Controllers\Api\v2;

use App\Device;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;

class DeviceController extends BaseController
{

    private $permission_module_name = "devices";

    public function index(Request $req)
    {
        if (isset($req->q))
            return $this->getResponse(Device::where('name_ar', 'like', '%'.$req->q.'%')->orWhere('name_en', 'like', '%'.$req->q.'%')->paginate(10));
        else
            return $this->getResponse(Device::paginate(10));
    }

    public function create(){}

    public function store(Request $request)
    {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        $data =  Device::create($request->all());
        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    public function show(Device $Device)
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        return $this->getResponse($Device);
    }

    public function edit(Device $Device)
    {
        //
    }

    public function update(Request $request, Device $Device)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $Device->update($request->all());
            return $this->getResponse($Device);
        } catch (\Exception $e) {
            return $this->getResponse(null, $e->getMessage(), 400, 400);
        }
    }

    public function destroy(Device $Device)
    {
        try {
            $this->checkUserHasPermission("delete",$this->permission_module_name);
            $Device->delete();
            return $this->getResponse('successful');
        } catch (\Exception $e) {
            return $this->getResponse(null, $e->getMessage(), 400, 400);
        }
    }
}
