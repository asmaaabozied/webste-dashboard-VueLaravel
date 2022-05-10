<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Http\Requests\DevicesRequest;
use App\Http\Resources\Collection\Api\v2\DevicesCollection;
use App\Models\Devices;
use App\Models\spare_parts;
use Carbon\Carbon;

class devicesController extends BaseController
{
    private $permission_module_name = "devices";

    public function __construct()
    {
        $this->tableName = 'devices';
        parent::__construct();
    }

    public function getAllDevices()
    {
        $this->checkUserHasPermission('show all', $this->permission_module_name);
        return $this->getAllData(DevicesCollection::class, Devices::class, Devices::whereNull('delated_at'));
    }

    public function createUpdate(DevicesRequest $request)
    {
        if (is_null($request->get('id'))) {
            $this->checkUserHasPermission('store', $this->permission_module_name);
        }
        else {
            $this->checkUserHasPermission('update', $this->permission_module_name);
        }

        Devices::createUpdate($request);

        return $this->getResponse();

    }

    public function getDeviceData($id)
    {
        $this->checkUserHasPermission("show specific", $this->permission_module_name);
        return $this->ShowCustomElement(Devices::class, $id, DevicesCollection::class, myTrans('resource_not_found'));
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);

        $device             = Devices::find($id);
        $device->delated_at = Carbon::now();
        $device->save();

        return $this->getResponse();
    }

}
