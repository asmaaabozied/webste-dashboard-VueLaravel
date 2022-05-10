<?php

namespace App\Http\Requests;



class CartRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required |exists:user,id',

        ];
    }
}
