<?php

namespace App\Models;

use App\BaseModel;
use Illuminate\Http\Client\Request;


class ServicePage extends BaseModel
{

    public $table = "servicespages";

    protected $fillable = [
        'service_id',
        'description','user_id','status'
    ];

    static function createUpdate($request)
    {
        $device = new self();

        if ($request->has('id')) {
            $device = self::find($request->id);
        }

        $device->name_ar = $request->get("name_ar");
        $device->name_en = $request->get("name_en");
        $device->save();

    }

}
