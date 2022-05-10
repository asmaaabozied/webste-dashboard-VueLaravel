<?php

namespace App\Http\Requests;



class CartProductStoreRequest extends BaseRequest
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
            'product_id' => 'required |exists:products,id'

        ];
    }
}
