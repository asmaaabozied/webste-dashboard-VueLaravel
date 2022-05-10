<?php

namespace App\Http\Requests;

use App\gallery;


class galleryRequest extends BaseRequest
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
            "password" => "required",
            "phone" => "required|numeric|min:10",
            "lat" => "required|numeric|min:-90|max:90",
            "lon" => "required|numeric|min:-180|max:180",
        ];
        if (request()->isMethod('PUT') || request()->isMethod('PATCH')) {
            $userId = gallery::findOrFail($this->gallery)->user_id ?? null;
            $arr = [
                "user_name" => "sometimes|string|unique:users,user_name,$userId",
                "phone" => "sometimes|numeric|min:10",
                "lat" => "sometimes|numeric",
                "lon" => "sometimes|numeric",
            ];
        }
        return $arr;
    }
}
