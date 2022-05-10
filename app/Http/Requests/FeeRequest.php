<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;


class FeeRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            "name" => ["required" , "unique:fees"],
            "description" => ["required"],
            "description_ar" => ["required"],
            "name_ar" => ["required" , "unique:fees"],
        ];
        if ($this->isUpdatedRequest()){
            $arr = [
                "name" => ["required" , "unique:fees,name,$this->fee"],
                "description" => ["required"],
                "description_ar" => ["required"],
                "name_ar" => ["required" , "unique:fees,name_ar,$this->fee"],
            ];
        }
        return  $arr;
    }
}
