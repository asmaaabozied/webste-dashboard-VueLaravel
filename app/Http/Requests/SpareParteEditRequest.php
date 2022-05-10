<?php

namespace App\Http\Requests;


class SpareParteEditRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name_en" => "sometimes",
            "code" => "sometimes |unique:spare_parts,code,$this->sparePart",

           ];
    }
}
