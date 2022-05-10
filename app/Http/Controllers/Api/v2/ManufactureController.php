<?php

namespace App\Http\Controllers\Api\v2;

use App\Manufacture;
use App\Models\manufactures_devices;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;

class ManufactureController extends BaseController
{
    private $permission_module_name = "manufacturer";


    public function index(Request $req)
    {
        if (isset($req->q))
            return $this->getResponse(Manufacture::where('name_ar', 'like', '%' . $req->q . '%')->orWhere('name_en', 'like', '%' . $req->q . '%')->paginate(10));
        else
            return $this->getResponse(Manufacture::paginate(10));
    }

    public function store(Request $request)
    {
        $this->checkUserHasPermission("store", $this->permission_module_name);

        $data = Manufacture::create($request->all());

        $devicesIds       = explode(",", $request->devicesIds);
        $devicesIdsActive = explode(",", $request->deviceIdsActive);
        manufactures_devices::createUpdate($data->id, $devicesIds, $devicesIdsActive);

        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    public function show(Manufacture $manufacture)
    {
        $this->checkUserHasPermission("show specific", $this->permission_module_name);
        $data = [
            'manufacture'      => $manufacture,
            'devicesIdsActive' => collect(manufactures_devices::where('is_active', '!=', 0)->where('manufactures_id', $manufacture->id)->select('device_id')->get())->pluck('device_id'),
            'devicesIds'       => collect(manufactures_devices::where('manufactures_id', $manufacture->id)->select('device_id')->get())->pluck('device_id'),
        ];
        return $this->getResponse($data);
    }

    public function update(Request $request, Manufacture $manufacture)
    {
        try {
            $this->checkUserHasPermission("update", $this->permission_module_name);
            $manufacture->update($request->all());
            $devicesIds       = [];
            $devicesIdsActive = [];
            if ($request->devicesIds != "") {

                $devicesIds = explode(",", $request->devicesIds);
            }
            if ($request->deviceIdsActive) {
                $devicesIdsActive = explode(",", $request->deviceIdsActive);
            }

            manufactures_devices::createUpdate($manufacture->id, $devicesIds, $devicesIdsActive);

            return $this->getResponse($manufacture);
        }
        catch (\Exception $e) {
            return $this->getResponse(null, $e->getMessage(), 400, 400);
        }
    }

    public function destroy(Manufacture $manufacture)
    {
        try {
            $this->checkUserHasPermission("destroy", $this->permission_module_name);
            $manufacture->delete();
            return $this->getResponse('successful');
        }
        catch (\Exception $e) {
            return $this->getResponse(null, $e->getMessage(), 400, 400);
        }
    }

    public function getManufactureDevices($manufactureId): \Illuminate\Http\JsonResponse
    {
        $manufacture_devices = manufactures_devices::getManufacturesDevices($manufactureId);
        return $this->getResponse($manufacture_devices);
    }
}
