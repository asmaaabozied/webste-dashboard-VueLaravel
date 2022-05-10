<?php

namespace App\Http\Resources\Api\v2;

use App\Customer;
use App\InstallmentOrder;
use Illuminate\Http\Resources\Json\JsonResource;

class InstallmentOrderResource extends JsonResource
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
