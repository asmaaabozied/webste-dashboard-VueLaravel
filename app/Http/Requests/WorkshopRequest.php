<?php

namespace App\Http\Requests;


use Illuminate\Validation\Rule;

class WorkshopRequest extends BaseRequest
{

    public function rules()
    {
        if ($this->isUpdatedRequest()) {
            $this->rule = 'sometimes';
        }
        $arr = [
            "name" => "$this->rule",
            "department_id" => "$this->rule|exists:departments,id",
            "branch_id" => "$this->rule|exists:branches,id",
            "description" => "$this->rule",
            "name_ar" => "$this->rule",
            "description_ar" => "$this->rule",
            "is_booked" => "sometimes|boolean",
            "image" => "$this->rule|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "type" =>  [
                "$this->rule",
                Rule::in([1, 2]),
            ],
        ];
        if (request()->isMethod("POST")) {
            $arr['name'] = 'required|unique:workshops,name';
            $arr['name_ar'] = 'required|unique:workshops,name_ar';
        }
        return $arr;
    }
}
