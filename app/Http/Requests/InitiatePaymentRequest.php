<?php

namespace App\Http\Requests;


use function App\Helpers\getAvailableCurrency;

class InitiatePaymentRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'InvoiceAmount' => 'required',
            'CurrencyIso' => 'required|in:'.implode(',',getAvailableCurrency()),
        ];
    }

}
