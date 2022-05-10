<?php

namespace App\Http\Requests;


class DeleteSparePartRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'maintenance_order_id' => "required|numeric|exists:maintenance_orders,id",
            'spare_id' => "required|numeric|exists:spare_parts,id",
            'id' => "sometimes|exists:order_spare_parts,id",
        ];
    }
}
