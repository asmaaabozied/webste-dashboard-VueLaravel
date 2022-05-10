<?php

namespace App\Http\Requests;




class RatingRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rang = "min:1|max:5";
        return [
            "order_id" => "required|exists:orders,id",
            "service_quality_rating" => "required|numeric|$rang",
            "employee_rating" => "required|numeric|$rang",
            "service_price_rating" => "required|numeric|$rang",
            "service_speed_rating" => "required|numeric|$rang",
            "comment" => "sometimes",
        ];
    }

}
