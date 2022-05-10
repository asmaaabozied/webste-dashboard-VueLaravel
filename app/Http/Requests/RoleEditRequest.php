<?php

namespace App\Http\Requests;



class RoleEditRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'sometimes |unique:role_inxes',
            'description' => 'sometimes',

           ];
    }
    public function messages()
    {
        return [
            'name.unique' => 'A name is alrady exists',
        ];
    }


}
