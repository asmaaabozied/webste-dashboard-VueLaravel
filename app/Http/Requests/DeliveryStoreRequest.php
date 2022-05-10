<?php

namespace App\Http\Requests;



class DeliveryStoreRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'price' => 'required | numeric |min:0',
            'location' => 'required ',
            'delivery_date' => 'required |date |date_format:Y-m-d H:i:s',
            'transaction_id' => 'required |exists:transactions,id',
        ];
    }
}

