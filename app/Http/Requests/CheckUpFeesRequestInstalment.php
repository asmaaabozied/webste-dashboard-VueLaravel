<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckUpFeesRequestInstalment extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            'installment_order_id' => "required|numeric|exists:installment_orders,id",
            'fee_id' => "sometimes|numeric|exists:fees,id",
            'fee_amount' => "required|numeric|min:0",
        ];

        if (request()->isMethod('PUT') || request()->isMethod('PATCH')) {
            $arr = [
                'installment_order_id' => "required|numeric|exists:maintenance_orders,id",
                'fee_amount' => "required|numeric|min:0",
                'fee_id' => "sometimes|numeric|exists:fees,id",
            ];
        }
        return $arr;
    }
}
