<?php

namespace App\Http\Requests;



class EmployeeAlertRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'emp_id' => 'required|exists:employees,id',
            'text' => 'required',

        ];
    }

    public function messages()
    {
        return [
            'emp_id.required' => 'emp_id is required',
            'text.required' => 'text is required',
            'emp_id.exists' => 'emp_id is not valide',
            ];
    }
}
