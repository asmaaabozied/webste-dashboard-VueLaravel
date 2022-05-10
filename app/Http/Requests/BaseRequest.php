<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use function App\Helpers\userHasRole;
class BaseRequest extends FormRequest

{
    public $rule = "required";

    public function authorize()
    {
        return true;
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();
        throw new HttpResponseException(response()->json($errors, JsonResponse::HTTP_UNPROCESSABLE_ENTITY));
    }

    protected function isUpdatedRequest()
    {
        return request()->isMethod("PUT") || request()->isMethod("PATCH");
    }

    protected function userHasRole($user,$roles): bool
    {
        return userHasRole($user,$roles);
    }

}
