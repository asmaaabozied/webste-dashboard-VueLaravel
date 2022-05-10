<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class CityRequest extends BaseRequest
{
    /**
     * @return array
     * @author karam mustafa
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'name_ar' => 'required',
            'country_inx_id' => 'required|exists:country_inxes,id',

        ];
    }
}
