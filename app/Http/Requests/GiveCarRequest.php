<?php

namespace App\Http\Requests;


/**
 * Class GiveCarRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class GiveCarRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'car_id' => 'required|exists:cars,id',
            'employee_id' => 'required|exists:employees,id',
        ];
    }
}
