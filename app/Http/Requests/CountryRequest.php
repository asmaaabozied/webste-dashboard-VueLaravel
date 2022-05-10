<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class CountryRequest extends BaseRequest
{

    public function rules()
    {
        return [
            'name' => 'required',
            'name_ar' => 'required',

        ];
    }
}
