<?php

namespace App\Http\Resources\Api\v2;

use App\Order;
use App\OrderReviewOrder;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderReviewOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
