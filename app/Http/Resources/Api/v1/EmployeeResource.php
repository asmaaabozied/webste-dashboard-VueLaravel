<?php

namespace App\Http\Resources\Api\v1;

use App\Http\Resources\Api\v2\OrderResource;
use App\Http\Resources\Api\v2\UserResource;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $role= $this->user->role ?? '';
        return [
            'id'          => $this->id,
            'name'        => $this->name ?? '',
            'phone'       => $this->phone ?? '',
            'nationality' => $this->nationality ?? '',
            'id_number'   => $this->id_number ?? '',
            'car'         => $this->car ?? '',
            'manger_id'=>$this->manger_id ?? '',
            'role'        => $role ?? '',
            'order_info'  => OrderResource::collection($this->orders),
            'user_info'   => $this->user ?? '',
            'image'       => $this->image ?? '',
            'created_at'  => $this->created_at ?? '',
            'updated_at'  => $this->updated_at ?? '',
        ];
    }
}
