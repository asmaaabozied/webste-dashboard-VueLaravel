<?php

namespace App\Http\Requests;



class DeliveryEditRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'price' => 'sometimes | numeric |min:0',
            "lat" => "required|numeric|min:-90|max:90",
            "lon" => "required|numeric|min:-180|max:180",
            'delivery_date' => 'sometimes |date |date_format:Y-m-d H:i:s',
            'transaction_id' => 'sometimes |exists:transactions,id',
        ];
    }
}
