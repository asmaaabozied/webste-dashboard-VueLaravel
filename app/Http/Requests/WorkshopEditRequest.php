<?php

namespace App\Http\Requests;


use Illuminate\Validation\Rule;

class WorkshopEditRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'department_id'=>'sometimes|exists:departments,id',
            'description'=>'sometimes',
            'description_ar'=>'sometimes',
            'branch_id'=>'sometimes|exists:branches,id',
            'name' => ['sometimes',Rule::unique('workshops' , 'name')->ignore($this->workshop), Rule::requiredIf(request()->isMethod("POST"))],
            'name_ar' => ['sometimes',Rule::unique('workshops' , 'name_ar')->ignore($this->workshop), Rule::requiredIf(request()->isMethod("POST"))],
            'site' => 'sometimes',
             'type' =>  [
                'sometimes',
                Rule::in([0, 1]),
            ],
        ];
    }


    public function messages()
    {
        return [
            'dept_id.exists'  => 'A description is invalide',

        ];
    }


}
