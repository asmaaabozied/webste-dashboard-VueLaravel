<?php

namespace App\Http\Requests;



class InvoiceStoreRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'transaction_id' => 'required |exists:transactions,id',

        ];
    }
}
