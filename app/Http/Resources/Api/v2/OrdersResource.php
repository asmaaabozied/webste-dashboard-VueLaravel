<?php

namespace App\Http\Resources\Api\v2;

use App\DiscountCode;
use Illuminate\Http\Resources\Json\JsonResource;
class OrdersResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                           => $this->id,
            'status'                       => $this->status,
            'reason'                       => $this->reason,
            'technical_reason'             => $this->technical_reason,
            'technical_status'             => $this->technical_status,
            'user_id'                      => $this->user_id,
            'user'                          =>$this->user->user_name ?? '',
            'type'                         => $this->type,

            'employee_id'                  => $this->employee_id,
            'created_at'                   => $this->created_at,
            'updated_at'                   => $this->updated_at,
        ];
    }


}
