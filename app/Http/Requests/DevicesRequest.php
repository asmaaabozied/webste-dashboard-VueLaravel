<?php

namespace App\Http\Requests;

class DevicesRequest extends BaseRequest
{

    public function rules()
    {
        return [
            'name_ar' => 'required',
            'name_en' => 'required',
        ];
    }
}
