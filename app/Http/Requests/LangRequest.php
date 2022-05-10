<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;


class LangRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'lang' => ['required' , Rule::in(['ar' , 'en'])]
        ];
    }
}
