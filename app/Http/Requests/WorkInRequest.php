<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class WorkInRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'workshop_id' => ['exists:workshops,id' ,
                Rule::requiredIf(
                    request()->isMethod('POST')
                )
            ],
            'employee_id' => 'required|array',
        ];
    }

}
