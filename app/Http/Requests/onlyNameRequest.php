<?php

namespace App\Http\Requests;



class onlyNameRequest extends BaseRequest
{

    /**
     * @return array
     * @author karam mustafa
     */
    public function rules()
    {
        return [
            'name' => 'required',

        ];
    }
}
