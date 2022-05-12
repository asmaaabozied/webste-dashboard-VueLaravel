<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use function foo\func;

/**
 * Class OrderRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class UsersRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_name'=> 'required',
            'type'=> 'required',
            'phone'=> 'required|numeric',

        ];
    }
}
