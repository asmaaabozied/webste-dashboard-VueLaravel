<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class MessageRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'response_message_id' => 'sometimes|exists:messages,id',
            'text' => 'required|string',
            'has_images' => 'required',
            'department_id' => 'sometimes|exists:departments,id',
            'images.*' => "required_if:has_images,1|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
        ];
    }
}
