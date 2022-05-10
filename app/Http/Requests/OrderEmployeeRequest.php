<?php

namespace App\Http\Requests;




class OrderEmployeeRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'employee_id' => 'required| array |exists:employees,id',
            'order_id' => 'required |exists:orders,id',
            ];
    }
}
