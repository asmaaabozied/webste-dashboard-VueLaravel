<?php

namespace App\Models;

use App\BaseModel;
use Illuminate\Http\Client\Request;


class Devices extends BaseModel
{

    public $table = "devices";

    protected $fillable = [
        'name_en',
        'name_ar'
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
