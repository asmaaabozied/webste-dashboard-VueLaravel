<?php

namespace App\Http\Requests;


use Illuminate\Support\Facades\Route;
use function App\Helpers\getAvailableCurrency;

/**
 * Class DirectPaymentRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class CheckUpFeesRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            'maintenance_order_id' => "sometimes|numeric|exists:maintenance_orders,id",
            'Installment_order_id' => "sometimes|numeric|exists:installment_orders,id",
            'fee_id' => "sometimes|numeric|exists:fees,id",
            'fee_amount' => "required|numeric|min:0",
        ];
        if (request()->isMethod('PUT') || request()->isMethod('PATCH')) {
            $arr = [
                'maintenance_order_id' => "required|numeric|exists:maintenance_orders,id",
                'fee_amount' => "required|numeric|min:0",
                'fee_id' => "sometimes|numeric|exists:fees,id",
            ];
        }
        return $arr;
    }

}
