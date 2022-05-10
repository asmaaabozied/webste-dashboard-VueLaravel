<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CartProductEditRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'quantity' => ['min:0' , 'numeric' , Rule::requiredIf(
                !request()->isMethod('delete')
            )],
            'product_id' => 'required |exists:products,id',

        ];
    }
}
