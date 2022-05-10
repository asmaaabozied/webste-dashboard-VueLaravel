<?php

namespace App\Http\Resources\Api\v2;

use Illuminate\Http\Resources\Json\JsonResource;

class TopicResource extends JsonResource
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
            "id" => $this->id,
            "name" => $this->name,
            "name_ar" => $this->name_ar,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
