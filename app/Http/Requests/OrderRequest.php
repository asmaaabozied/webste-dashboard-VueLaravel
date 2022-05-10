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
class OrderRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status'=> 'required|numeric|min:0|max:6',
            'price'=> 'sometimes',
            'payment_method'=> 'required|numeric|min:0|max:2',
            'discountCode'=> 'sometimes',
            'employee_id' => 'sometimes|exists:employees,id',
            'rejected_desc' => Rule::requiredIf($this->status == 4),
        ];
    }
}
