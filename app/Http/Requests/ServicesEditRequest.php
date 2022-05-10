<?php

namespace App\Http\Requests;

class ServicesEditRequest extends BaseRequest
{


    public function rules()
    {
        $rules = [
            "name_ar"        => "required",
            "name_en"        => "required",
            "description_ar" => "required",
            "description_en" => "required",
            "rating"         => "required|int",
            "id"             => "required"
        ];

        return $rules;
    }
}
