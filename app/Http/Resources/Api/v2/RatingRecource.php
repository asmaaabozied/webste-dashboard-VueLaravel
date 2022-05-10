<?php

namespace App\Http\Resources\Api\v2;

use App\Order;
use Illuminate\Http\Resources\Json\JsonResource;

class RatingRecource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'order_id' => $this->order_id,
            "order_info" => Order::find($this->order_id),
            'service_quality_rating' => (float)$this->service_quality_rating,
            'employee_rating' => (float)$this->employee_rating,
            'service_price_rating' => (float)$this->service_price_rating,
            'service_speed_rating' => (float)$this->service_speed_rating,
            'user_id' => $this->user_id,
            'comment' => $this->comment,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
