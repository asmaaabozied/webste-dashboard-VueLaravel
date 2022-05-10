<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class WorkScheduleRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => ['required', 'exists:work_schedules'],
            'from' => ['sometimes', 'date_format:H:i', 'required_if:day_off,false'],
            'to' => ['sometimes', 'date_format:H:i','required_if:day_off,false'],
            'day_off' => ['sometimes', 'boolean']
        ];
    }

}
