<?php

namespace App\Http\Resources\Api\v2;

use App\Customer;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerAlertRecource extends JsonResource
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
            'id' => $this->date_timeid,
            'date_time' => $this->date_time,
            'text' => $this->text,
            'customer_id' => $this->customer_id,
            'customer_info' => Customer::find($this->customer_id),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
