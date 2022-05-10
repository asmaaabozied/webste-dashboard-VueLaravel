<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class ManagerDetrmineSparePart
 * @author karam mustafa
 * @package App\Http\Requests
 */
class ManagerDetermineSparePart extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'maintenance_order_id' => "required|numeric|exists:maintenance_orders,id|exists:maintenance_order_fees,maintenance_order_id",
            'fee_id' => "sometimes|numeric|exists:fees,id|exists:maintenance_order_fees,fee_id",
            'fee_amount' => [
                "sometimes", "numeric", "min:0",
                Rule::requiredIf(isset($request->fee_id))
            ],
            'spare_parts_amount' => "sometimes|numeric|min:0",
        ];
    }
}
