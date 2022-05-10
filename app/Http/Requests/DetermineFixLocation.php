<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class DetermineFixLocation
 * @author karam mustafa
 * @package App\Http\Requests
 */
class DetermineFixLocation extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fix_place' => "required|numeric|min:2|max:2",
            'order_id' => "required|numeric|exists:orders,id",
        ];
    }
}
