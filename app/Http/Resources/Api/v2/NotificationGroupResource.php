<?php

namespace App\Http\Resources\Api\v2;

use Illuminate\Http\Resources\Json\JsonResource;

class NotificationGroupResource extends JsonResource
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
            'name' => $this->id,
            'notification_key' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
