<?php

namespace App\Http\Requests;


use App\DiscountCode;
use App\Order;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class DiscountCodeRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $arr =
            [
                "name" => "required|string|unique:discount_codes,name,$this->discountCode",
                "type" => ["sometimes" , Rule::in([0,1])],
                "amount" => "required|numeric|min:0",
                "valid_from" => "required|date|after:now",
                "valid_to" => "required|date|after:valid_from",
            ];
        if ($this->isUpdatedRequest()){
            $id = Route::current()->parameter("discountCode");
            $dis = !request()->isMethod("POST") ? DiscountCode::findOrFail($id)->order : null;
            $arr =
                [
                    "name" => "sometimes|string|unique:discount_codes,name,$this->discountCode",
                    "type" => ["sometimes" , Rule::in([0,1])],
                    "amount" => "sometimes|numeric",
                    "valid_from" => "sometimes|date|after:now",
                    "valid_to" => "sometimes|date|after:valid_from",
                    "ConfirmUpdate" => Rule::requiredIf(!is_null($dis)),
                    "ConfirmDelete" => Rule::requiredIf(!is_null($dis)),
                ];
        }
        return $arr;
    }
}
