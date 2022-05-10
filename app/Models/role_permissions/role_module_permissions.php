<?php

namespace App\Models\role_permissions;

use App\BaseModel;

class role_module_permissions extends BaseModel
{
    public $table = "role_module_permissions";

    protected $fillable = [
        'role_modules_id  ',
        'permission_id ',
    ];

}
