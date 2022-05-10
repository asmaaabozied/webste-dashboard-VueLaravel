<?php

namespace App\Http\Requests;



class RoleRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required |unique:role_inxes',
            'description' => 'required',
           ];
    }
    public function messages()
    {
        return [
            'name.required' => 'A name is required',
            'name.unique' => 'A name is alrady exists',
            'description.required'  => 'A description is required',
        ];
    }


}
