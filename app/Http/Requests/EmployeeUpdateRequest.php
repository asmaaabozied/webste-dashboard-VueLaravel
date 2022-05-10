<?php

namespace App\Http\Requests;



class EmployeeUpdateRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'sometimes',
            'phone' => 'sometimes',
            'nationality' => 'sometimes',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'department_id' => 'sometimes|exists:departments,id',
            'car_id' => 'sometimes|exists:cars,id',
            'user_name' => 'sometimes|unique:users',
            'password' => 'sometimes|min:3',
        ];
    }
}
