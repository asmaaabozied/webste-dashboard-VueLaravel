<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Http\Requests\SpareParteRequest;
use App\Http\Resources\Collection\Api\v2\SharePartsCollection;
use App\Models\Devices;
use App\Models\spare_parts;
use Carbon\Carbon;

class sparePartController extends BaseController
{
    private $permission_module_name = "spare_parts";

    public function __construct()
    {
        $this->tableName = 'spare_parts';
        parent::__construct();
    }

    public function getAllDevices()
    {
        $this->checkUserHasPermission('show all', $this->permission_module_name);
        return $this->getAllData(SharePartsCollection::class, spare_parts::class);
    }

    public function createUpdate(SpareParteRequest $request)
    {
        if (is_null($request->get('id'))) {
            $this->checkUserHasPermission('store', $this->permission_module_name);
        }
        else {
            $this->checkUserHasPermission('update', $this->permission_module_name);
        }

        // spare_parts::createUpdate($request);

         if($request->id=='create'){

           spare_parts::create($request->all());

            }else{

            $sparePart = spare_parts::find($request->id);
            $sparePart->name_ar = $request->get("name_ar") ?? '';
            $sparePart->name_en = $request->get("name_en") ?? '';
            $sparePart->device_id = $request->get("device_id") ?? '';
            $sparePart->manufacture_id = $request->get("manufacture_id") ?? '';

            $sparePart->code = $request->get("code") ?? '';
            $sparePart->save();


        }



        return $this->getResponse();

    }

    public function getDeviceData($id)
    {
        $this->checkUserHasPermission("show specific", $this->permission_module_name);
        return $this->ShowCustomElement(spare_parts::class, $id, SharePartsCollection::class, myTrans('resource_not_found'));
    }

    public function destroy($id)

    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);

        $device             = spare_parts::find($id);
        // $device->delated_at = Carbon::now();
        $device->delete();

        return $this->getResponse();
    }

}
