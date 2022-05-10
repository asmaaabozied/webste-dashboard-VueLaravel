<?php

namespace App\Models;

use App\BaseModel;

class spare_parts extends BaseModel
{
    public $table = "spare_parts";

    protected $fillable = [
        'name_en',
        'name_ar',
        'device_id',
        'manufacture_id',
        'code'
    ];



    static function createUpdate($request)
    {
        $sparePart = new self();

        if ($request->has('id')) {
            $sparePart = self::find($request->id);
        }

        $sparePart->name_ar = $request->get("name_ar") ?? '';
        $sparePart->name_en = $request->get("name_en") ?? '';
        $sparePart->code = $request->get("code") ?? '';
        $sparePart->save();

    }

}
