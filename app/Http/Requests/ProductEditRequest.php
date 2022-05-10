<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductEditRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            "model_code" => "sometimes |unique:products,model_code,$this->id",
            "name" => "sometimes|string",
            "name_ar" => "sometimes|string",
            "description" => "sometimes|string",
            "description_ar" => "sometimes|string",
            "quantity" => "sometimes | Integer |min:0|max:9999999,99999",
            "product_category_id" => "sometimes |exists:product_categories,id",
            "price" => "sometimes| numeric |min:0|max:9999999,99999",
            "image" => "sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "offerType" => ["sometimes", Rule::in([0, 1])],
            "offer_rateOrAmount" => "sometimes|numeric"
        ];
    }
}
