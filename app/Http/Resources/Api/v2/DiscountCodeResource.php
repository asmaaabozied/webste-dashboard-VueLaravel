<?php

namespace App\Http\Resources\Api\v2;

use App\DiscountCode;
use Illuminate\Http\Resources\Json\JsonResource;

class DiscountCodeResource extends JsonResource
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
            'name' => $this->name,
            'type' => $this->type,
            'amount' => $this->amount,
            'valid_from' => $this->valid_from,
            'order' => DiscountCode::find($this->id)->order,
            'valid_to' => $this->valid_to,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
