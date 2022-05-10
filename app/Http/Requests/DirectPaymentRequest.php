<?php

namespace App\Http\Requests;


use Illuminate\Support\Facades\Route;
use function App\Helpers\getAvailableCurrency;

/**
 * Class DirectPaymentRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class DirectPaymentRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            "paymentType" => "required",
            "PaymentURL" => "required",
            "card" => "required",
            "card.Number" => "required|numeric",
            "card.expiryMonth" => "required",
            "card.expiryYear" => "required",
            "card.securityCode" => "required|numeric",
            "saveToken" => "required"
        ];
        return $arr;
    }

}
