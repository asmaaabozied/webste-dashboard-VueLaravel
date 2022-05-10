<?php

namespace App\Http\Resources\Api\v2;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerRecource extends JsonResource
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
            'phone' => $this->phone,
            "lat" => $this->lat,
            "lon" => $this->lon,
            'user_id' => $this->user_id,
            'user_info' => User::find($this->user_id),
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at,
        ];
    }
}
