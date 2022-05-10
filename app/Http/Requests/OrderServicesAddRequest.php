<?php

namespace App\Http\Requests;

class OrderServicesAddRequest extends BaseRequest
{


    public function rules()
    {
        $rules= [

            "description" => "required",

        ];

        return $rules;
    }
}
