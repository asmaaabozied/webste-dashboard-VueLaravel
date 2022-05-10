<?php

namespace App\Http\Requests;

use App\Customer;


class CustomerRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            "user_name" => "required|string|unique:users,user_name",
            "phone" => "required|numeric|min:10|unique:customers,phone",
            "lat" => "required|numeric|min:-90|max:90",
            "lon" => "required|numeric|min:-180|max:180",
        ];
        if ($this->isUpdatedRequest()){
            $userId = Customer::findOrFail($this->customer)->user_id ?? null;
            $arr = [
                "user_name" => "sometimes|string|unique:users,user_name,$userId",
                "phone" => "sometimes|numeric|min:10|unique:customers,phone,$this->customer",
                "lat" => "sometimes|numeric",
                "lon" => "sometimes|numeric",
            ];
        }
        return $arr;
    }
}
