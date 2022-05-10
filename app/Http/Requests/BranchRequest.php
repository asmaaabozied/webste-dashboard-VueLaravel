<?php

namespace App\Http\Requests;



class BranchRequest extends BaseRequest
{



    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            "lat" => "$this->rule|numeric|min:-90|max:90",
            "lon" => "$this->rule|numeric|min:-180|max:180",
            "name" => "required|unique:branches,name",
            "name_ar" => "required|unique:branches,name_ar",
            "radius" => "$this->rule|numeric",
        ];
        if ($this->isUpdatedRequest()){
            $this->rule = "sometimes";
            $arr = [
                "name"    => "$this->rule|unique:branches,name,$this->branch",
                "name_ar" => "$this->rule|unique:branches,name_ar,$this->branch",
                "lat"     => "$this->rule|numeric|min:-90|max:90",
                "lon"     => "$this->rule|numeric|min:-180|max:180",
                "radius"  => "$this->rule|numeric",
            ];
        }
        return  $arr;
    }
}
