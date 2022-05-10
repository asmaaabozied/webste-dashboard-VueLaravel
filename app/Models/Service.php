<?php

namespace App\Models;

use App\BaseModel;

class Service extends BaseModel
{

    public $table="services";

    protected $fillable = [
        'name_en',
        'name_ar',
        'description_en',
        'description_ar',
        'img',
        'link',
        'rating'
    ];

    protected function getImageAttribute(): string
    {
        return asset('/storage/files/images/services_images/'.$this->attributes['img']);
    }
}
