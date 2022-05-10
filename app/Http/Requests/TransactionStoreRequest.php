<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;


class TransactionStoreRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'discount_code' => 'sometimes',
//            'payment_method' =>  ['required' , Rule::in(['1' , '0'])],
            'delivery_method' => ['required' , Rule::in(['1' , '0'])],
        ];
    }
}
