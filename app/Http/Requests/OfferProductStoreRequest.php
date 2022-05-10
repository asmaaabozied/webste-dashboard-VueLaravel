<?php

namespace App\Http\Requests;



class OfferProductStoreRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'quantity' => 'required | Integer |min:0',
            'offer_id' => 'required |exists:offers,id',
            'product_id' => 'required |exists:products,id',

        ];
    }

}
