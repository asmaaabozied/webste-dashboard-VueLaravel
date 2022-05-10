<?php

namespace App\Http\Resources\Api\v2;

use App\Department;
use App\Http\Resources\Api\v1\DepartmentResource;
use App\Message;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Image;

class MessageResource extends JsonResource
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
            'user_id' => $this->user_id,
            'user_info' => $this->user,
            'response_for_current_message' => $this->getResponseMessage($this->id),
            'department_id' =>  $this->department_id,
            'text' => $this->text,
            'has_images' => $this->has_images ? true : false,
            'images' => $this->has_images ? $this->images : null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    private function getResponseMessage($param)
    {
        return Message::where('response_message_id' , $param)->getWithOrderByDesc();
    }
}
