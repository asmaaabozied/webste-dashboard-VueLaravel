<?php

namespace App\Models\role_permissions;

use App\BaseModel;

class modules extends BaseModel
{
    public $table = "modules";

    protected $fillable = [
        'name',
    ];

    public static function getAllModulesWithPerMissions(): \Illuminate\Database\Eloquent\Builder
    {
        return self::with('modulePermissions')->get();
    }


    public function modulePermissions()
    {
        return $this->hasMany(permissions::class, "modules_id");
    }


}
