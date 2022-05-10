<?php

namespace App\Http\Requests;



class DepartmintEditRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            "name" => "sometimes |unique:departments,name,{$this->department}",
            "name_ar" => "sometimes |unique:departments,name_ar,{$this->department}",
            "description" => "sometimes",
            "description_ar" => "sometimes",
            "image" => "sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
        ];
    }
}
