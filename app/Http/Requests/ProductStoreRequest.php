<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductStoreRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'model_code' => 'required |unique:products',
            'name' => 'required',
            'name_ar' => 'required',
            'description' => 'sometimes',
            'description_ar' => 'sometimes',
            'quantity' => 'required | Integer |min:0|max:9999999,99999',
            'product_category_id' => 'required |exists:product_categories,id',
            'price' => 'required| numeric |min:0|max:9999999,99999',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'offerType' => ['sometimes', Rule::in([0, 1])],
            'offer_rateOrAmount' => 'sometimes'
        ];
    }
}
