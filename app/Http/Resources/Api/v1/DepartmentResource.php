<?php

namespace App\Http\Resources\Api\v1;

use App\Http\Resources\Api\v2\MessageResource;
use App\Message;
use App\Workshop;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class DepartmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $coll =  Message::where('department_id' , $this->id)->get();

        return [
            'id'             => $this->id,
            'name'           => $this->name,
            'name_ar'        => $this->name_ar,
            'description'    => $this->description,
            'description_ar' => $this->description_ar,
            'suggestions'    => $this->suggestions,
            'messages'       => $coll,
            'workshops'      => $this->workshops,
            'image'          => $this->image,
            'created_at'     => $this->created_at,
            'updated_at'     => $this->updated_at,
        ];
    }
}
