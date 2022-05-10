<?php

namespace App\Models\role_permissions;

use App\BaseModel;
use Illuminate\Support\Facades\DB;

class permissions extends BaseModel
{
    public $table = "permissions";

    protected $fillable = [
        'display_name ',
        'modules_id ',
    ];

    public static function createRoleModulesByPermissions(array $permissions,int $role_id):void
    {

        $permissionsModules=self::whereIn("id",$permissions)->select("modules_id")->groupby("modules_id")->get()->toArray();

        $prepareRoleModulesToInsert=[];

        foreach ($permissionsModules as $value){

            $prepareRoleModulesToInsert[] = [
                "module_id"   => $value["modules_id"],
                "role_id" => $role_id
            ];

        }

        role_modules::insert($prepareRoleModulesToInsert);
    }

    public static function createRoleModulesPermissions(array $permissions,int $role_id):void
    {
        $roleModulePermissions=role_modules::where('role_id',$role_id)
                    ->whereIn('permissions.id',$permissions)
                    ->select('role_modules.id as role_modules_id','permissions.id as permission_id')
                    ->join('permissions','permissions.modules_id','=','role_modules.module_id')
                    ->get()
                    ->toArray();

        role_module_permissions::insert($roleModulePermissions);
    }

    public static function getPermissionForRole(int $role_id): array
    {

        $rolePermission = role_module_permissions::select('role_module_permissions.permission_id')
            ->join('role_modules', 'role_modules.id', '=', 'role_module_permissions.role_modules_id')
            ->where('role_modules.role_id', $role_id)->get()->toArray();

        $rolePermission = collect($rolePermission)->pluck("permission_id")->toArray();

        return $rolePermission;

    }


    //it's helper to me to create check and create the role if not exist

    public static function createIfNotExist(string $permission_name,string $permission_module_name)
    {

        $chk = self::where('display_name', $permission_name)
            ->where('modules.name', $permission_module_name)
            ->join('modules', "modules.id", '=', 'permissions.modules_id')->count();

        if ($chk !=0){
            return;
        }

        $module_id = modules::where('name', $permission_module_name)->first();

        if (is_null($module_id)) {
            //create The Module Name

            DB::insert('INSERT INTO `modules` (`id`, `name`, `created_at`, `updated_at`) VALUES (NULL, ?, current_timestamp(), NULL);', [$permission_module_name]);
            $module_id = modules::where('name', $permission_module_name)->first()->id;

        }
        else {
            $module_id = $module_id->id;
        }

        $permission =new self();
        $permission->display_name=$permission_name;
        $permission->modules_id=$module_id;
        $permission->save();



    }

}
