<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class NearestLocationRequest extends BaseRequest
{

    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "lat" => "$this->rule|numeric|min:-90|max:90",
            "lon" => "$this->rule|numeric|min:-180|max:180",
        ];
    }
}
