<?php

namespace App\Http\Requests;

class ServicesAddRequest extends BaseRequest
{


    public function rules()
    {
        $rules= [
            "name_ar"        => "required",
            "name_en"        => "required",
            "description_ar" => "required",
            "description_en" => "required",
            "image"          => "required|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "rating"         => "required|int"
        ];

        return $rules;
    }
}
