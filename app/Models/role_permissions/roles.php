<?php

namespace App\Models\role_permissions;

use App\BaseModel;

class roles extends BaseModel
{
    public $table ="roles";

    protected $fillable = [
        'display_name'
    ];

    public static function createUpdateRole(string $display_name,$role_id): roles
    {
        if (is_null($role_id)) {
            $role = new self();
        }
        else {
            $role = self::find($role_id);
        }

        $role->display_name = $display_name;
        $role->save();

        return $role;
    }

    public static function getRoleIdByName(string $role_name): int
    {

        $role = self::where('display_name', $role_name)->first();

        if (is_null($role_name)) {
            return 0;
        }

        return $role->id;
    }

}
