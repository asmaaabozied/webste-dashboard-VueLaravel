<?php


namespace App\Http\Resources\Api\v2;


use Illuminate\Http\Resources\Json\JsonResource;

class ContentManagementResource extends JsonResource
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
