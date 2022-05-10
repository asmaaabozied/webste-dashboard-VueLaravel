<?php

namespace App\Http\Resources\Api\v2;

use App\Order;
use Illuminate\Http\Resources\Json\JsonResource;

class ConsultantOrderResource extends JsonResource
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
            'description' => $this->description,
            'solve_problem' => $this->solve_problem,
            'order_id' => $this->order_id,
            'order_info' => new OrderResource($this->order),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
