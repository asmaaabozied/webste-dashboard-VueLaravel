<?php

namespace App\Http\Requests;


use Illuminate\Support\Facades\Route;
use function App\Helpers\getAvailableCurrency;

class ExecutePaymentRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            "PaymentMethodId" => "required",
            "transaction_id" => "required",
            "CustomerName" => "sometimes",
            "InvoiceValue" => "required",

            "DisplayCurrencyIso" => "sometimes",
            "MobileCountryCode" => "sometimes",
            "CustomerMobile" => "sometimes|numeric|min:10",
            "CustomerEmail" => "sometimes|email",

            "Language" => "sometimes|string|max:3",

            "CustomerReference" => "sometimes",
            "CustomerCivilId" => "sometimes",
            "CallBackUrl" => "sometimes",
            "ErrorUrl" => "sometimes",

            "UserDefinedField" => "sometimes",
            "CustomerAddress" => "sometimes",
            "ExpiryDate" => "sometimes",
            "SupplierCode" => "sometimes",
            "SupplierValue" => "sometimes",
            "InvoiceItems" => "sometimes",

            "ShippingMethod" => "sometimes",
            "ShippingConsignee" => "sometimes",

            "SourceInfo" => "sometimes",
        ];
        return $arr;
    }

}
