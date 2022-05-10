<?php

namespace App\Http\Resources\Api\v2;

use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
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
            'car_kind' => $this->car_kind,
            'palette_number' => $this->palette_number,
            'employee_info' => $this->employee,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
