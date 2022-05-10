<?php

namespace App\Models;

use App\BaseModel;

class manufactures_devices extends BaseModel
{
    public $table = "manufactures_devices";

    public $timestamps = false;

    protected $fillable = [
        'device_id',
        'manufactures_id',
        'is_active'
    ];

    static function createUpdate($manufactureId, $deviceIds, $devicesIdsActive)
    {

        $insert       = [];
        $oldDeviceIds = collect(self::where('manufactures_id', $manufactureId)->select('device_id')->get())->pluck("device_id")->toArray();

        $insert = [];
        $update = [];

        foreach ($deviceIds as $deviceId) {

            $prepareDataToInsert = [
                "device_id"       => $deviceId,
                "manufactures_id" => $manufactureId,
                "is_active"       => 0
            ];
            if (in_array($deviceId, $devicesIdsActive)) {
                $prepareDataToInsert["is_active"] = 1;
            }

            if (in_array($deviceId, $oldDeviceIds)) {
                $update[] = $prepareDataToInsert;
            }
            else {
                $insert[] = $prepareDataToInsert;
            }

        }

        if (!empty($insert)) {
            self::insert($insert);
        }


        if (!empty($update)) {

            foreach ($update as $item) {

                self::where('manufactures_id', $item["manufactures_id"])
                    ->where('device_id', (int)$item["device_id"])
                    ->update(["is_active" => (int)$item["is_active"]]);
            }
        }


    }

    static function getManufacturesDevices(int $manufactureId)
    {
        return self::where('manufactures_id', $manufactureId)
            ->where('is_active', 1)
            ->join('devices', 'devices.id', '=', 'manufactures_devices.device_id')->select('devices.name_en as text','devices.id as value')->get();
    }
}
