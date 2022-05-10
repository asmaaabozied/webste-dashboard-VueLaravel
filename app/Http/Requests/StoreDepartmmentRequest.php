<?php

namespace App\Http\Requests;




class StoreDepartmmentRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'name' => 'required |unique:departments',
            'name_ar' => 'required |unique:departments',
            'description_ar' => 'required |unique:departments',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

}
