<?php

namespace App\Http\Resources\Api\v2;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
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
            'user_name' => $this->user_name,
            'name'=>$this->customer->name ?? '',
            'phone'=>$this->customer->phone ?? '',

            'location'=>$this->customer->location ?? '',
            'contract_active'=>$this->customer->contract_active ?? '',


            'contract_number'=>$this->customer->contract_number ?? '',

            'type' => $this->type,
            'status' => $this->status,

            'role_id' => $this->role_id,
            'employee_id' => $this->employee_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
