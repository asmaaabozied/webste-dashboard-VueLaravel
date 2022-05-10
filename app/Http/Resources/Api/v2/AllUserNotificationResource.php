<?php

namespace App\Http\Resources\Api\v2;

use Illuminate\Http\Resources\Json\JsonResource;

class AllUserNotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = $this->data;
        $data['id'] = $this->id;
        $data['created_at'] = $this->created_at;
        $data['is_readied'] = $this->read_at != null;
        return array_map( function ($item){
            return $item;
        } , $data);
    }
}
