<?php

namespace App\Http\Requests;



class CategoryStoreRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:product_categories,name',
            'name_ar' => 'required|unique:product_categories,name_ar',
            'description' => 'required',
            'description_ar' => 'required',
            'image' => 'sometimes |image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

}
