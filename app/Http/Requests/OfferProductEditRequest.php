<?php

namespace App\Http\Requests;



class OfferProductEditRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'quantity' => 'sometimes | Integer |min:0',
            'offer_id' => 'sometimes |exists:offers,id',
            'product_id' => 'sometimes |exists:products,id',

        ];
    }
}
