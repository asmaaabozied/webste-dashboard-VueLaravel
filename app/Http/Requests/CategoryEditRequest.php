<?php

namespace App\Http\Requests;



class CategoryEditRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name" => "sometimes |unique:product_categories,name,$this->id",
            "name_ar" => "sometimes |unique:product_categories,name_ar,$this->id",
            "description_ar" => "sometimes",
            "description" => "sometimes",
            "image" => "sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
        ];
    }
}
