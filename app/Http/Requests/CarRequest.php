<?php

namespace App\Http\Requests;


/**
 * Class CarRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class CarRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'car_kind'       => 'required',
            'palette_number' => 'required',
        ];
    }
}
