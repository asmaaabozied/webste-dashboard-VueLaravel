<?php

namespace App\Http\Resources\Api\v2;

use App\Department;
use App\Http\Resources\Api\v1\DepartmentResource;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class SuggestionResource extends JsonResource
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
