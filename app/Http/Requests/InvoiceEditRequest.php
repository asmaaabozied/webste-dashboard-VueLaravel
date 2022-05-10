<?php

namespace App\Http\Requests;



class InvoiceEditRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'transaction_id' => 'sometimes |exists:transactions,id',
        ];
    }
}


