<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class SuggestionRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr =  [
            "text" => 'required|string',
            "department_id" => 'required|exists:departments,id',
        ];
        if ($this->isUpdatedRequest()){
            $arr =  [
                "text" => 'sometimes',
                "department_id" => 'sometimes|exists:departments,id',
            ];
        }
        return $arr;
    }
}
