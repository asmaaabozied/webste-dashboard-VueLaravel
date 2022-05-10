<?php

namespace App\Http\Requests;



class OfferStoreRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description' => 'required ',
            'discount_rate' => 'sometimes | numeric |min:0',
            'offer_price'=> 'required | numeric |min:0',
        ];
    }
}
