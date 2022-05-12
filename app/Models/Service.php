<?php

namespace App\Models;

use App\BaseModel;
use App\Role;
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



    public  function roles()
    {
        return  $this->belongsToMany(Role::class, 'role_service', 'service_id', 'role_id')->withTimestamps();
    }

}
