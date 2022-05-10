<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class DetermineSparePartRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class DetermineSparePartRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'maintenance_order_id' => "sometimes|numeric|exists:maintenance_orders,id",
            'Installment_order_id' => "sometimes|numeric|exists:installment_orders,id",
            'spare_id' => "required|numeric|exists:spare_parts,id",
            'quantity' => "required|numeric|min:0",
        ];
    }
}
