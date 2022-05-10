<?php

namespace App\Models\role_permissions;

use App\BaseModel;

class role_modules extends BaseModel
{
    public $table = "role_modules";

    protected $fillable = [
        'role_id ',
        'module_id ',
    ];

}
