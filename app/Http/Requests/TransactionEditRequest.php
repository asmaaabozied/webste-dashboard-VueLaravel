<?php

namespace App\Http\Requests;



class TransactionEditRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'cart_id' => 'sometimes |exists:carts,id',
            'discount_code' => 'sometimes |exists:discount_code',
            'price' => 'sometimes | numeric |min:0',
            'payment_method' => 'sometimes| Integer |min:0',
            'delivery_method' => 'sometimes| Integer |min:0',
            'type' =>  [
                'sometimes',
                Rule::in([0, 1]),
            ], ];
    }
}
