<?php

namespace App\Http\Resources\Api\v2;

use App\Order;
use Illuminate\Http\Resources\Json\JsonResource;

class PreventionMaintenanceOrderResource extends JsonResource
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
