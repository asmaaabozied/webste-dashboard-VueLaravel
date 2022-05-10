<?php

namespace App\Http\Requests;



class CustomerAlertRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'date_time' => 'required',
            'text' => 'required',
            'customer_id' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'date_time.required' => 'time is required',
            'text.required' => 'text is required',
            'customer_id.required' => 'customer is required',
        ];
    }
}
