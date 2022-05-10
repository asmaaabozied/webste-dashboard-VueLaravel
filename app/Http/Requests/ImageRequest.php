<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

/**
 * Class ImageRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class ImageRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "image" => 'required|array',
            "image.*" => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048|required_if:has_image,1',
            "message_id" => 'sometimes',
            "order_id" => 'sometimes',
            "maintenance_order_id" => 'sometimes',
            "has_image" => 'sometimes|min:0|max:1',
        ];
    }
}
