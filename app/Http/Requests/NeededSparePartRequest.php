<?php

namespace App\Http\Requests;




class NeededSparePartRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'part_id' => 'required|exists:spare_parts,id',
            'order_id' => 'required|exists:maintenance_orders,id',
            'quntity' => 'required| Integer |min:0',

        ];
    }

    public function messages()
    {
        return [
            'part_id.required' => 'part_id is required',
            'specify_damage.required' => 'specify_damage is required',
            'part_id.exists' => 'part_id is not valide',
            'request_id.required' => 'request_id is required',
            'request_id.exists' => 'request_id is not valide',
        ];
    }
}
