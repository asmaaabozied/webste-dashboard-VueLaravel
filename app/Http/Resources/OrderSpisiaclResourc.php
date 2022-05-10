<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderSpisiaclResourc extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this[$this->snakeToCamelCase($this->type)];
    }

    private function snakeToCamelCase($string, $capitalizeFirstCharacter = false) 
    {
    
        $str = str_replace(' ', '', ucwords(str_replace('_', ' ', $string)));
    
        if (!$capitalizeFirstCharacter) {
            $str[0] = strtolower($str[0]);
        }
    
        return $str;
    }
}
