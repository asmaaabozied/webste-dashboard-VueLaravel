<?php

namespace App\Http\Requests;



class OfferEditRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description' => 'sometimes ',
            'discount_rate' => 'sometimes| numeric |min:0',
            'offer_price'=> 'sometimes | numeric |min:0 ',
            'isEnabled'=>'sometimes | boolean'

        ];
    }
}
