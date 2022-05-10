<?php

namespace App\Http\Resources\Api\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkshopResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $department = $this->department;
        return [
            'id'              => $this->id,
            'name'            => $this->name,
            "lat"             => $this->lat,
            "lon"             => $this->lon,
            'name_ar'         => $this->name_ar,
            'description_ar'  => $this->description_ar,
            'image'           => $this->image,
            'type'            => $this->type,
            'description'     => $this->description,
            'department_info' => $department,
            'employees_info'  => $this->employees_info,
            'branch_info'     => $this->branch->only(['id', 'name', 'name_ar']),
            'created_at'      => $this->created_at,
            'updated_at'      => $this->updated_at,
        ];
    }
}
