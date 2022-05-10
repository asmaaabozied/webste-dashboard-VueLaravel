<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

/**
 * Class AppointmentRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class AppointmentRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->isUpdatedRequest()) {
            $this->rule = 'sometimes';
        }
        return [
            "start_time" => "$this->rule|date_format:H:i",
            "end_time"   => "$this->rule|date_format:H:i",
            "duration"   => "$this->rule|integer",
            "date_start" => "$this->rule|date|after:now",
            "date_end"   => "$this->rule|date|after:now",
            "user_id"    => "sometimes|exists:users,id",
            "branch_id"  => "sometimes|exists:branches,id",
        ];
    }

}
