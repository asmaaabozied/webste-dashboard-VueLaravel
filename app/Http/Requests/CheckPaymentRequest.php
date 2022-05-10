<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CheckPaymentRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class CheckPaymentRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'paymentId' => 'required|numeric',
            'transaction_id' => 'required|numeric',
        ];
    }
}
