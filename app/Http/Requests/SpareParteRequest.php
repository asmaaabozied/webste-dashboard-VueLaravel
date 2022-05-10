<?php

namespace App\Http\Requests;



class SpareParteRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_en' => 'required',
            'name_ar' => 'required',
            'code' => 'required |unique:spare_parts',

           ];
    }
    public function messages()
    {
        return [
            'name_en.required' => 'A name is required',
            'name_ar.required' => 'A name is required',
            'code.unique' => 'A code muste be a unique',
            'code.required'  => 'A code is required',

        ];
    }

}
