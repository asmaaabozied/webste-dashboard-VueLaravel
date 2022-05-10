<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Models\role_permissions\modules;
use App\Models\role_permissions\permissions;
use App\Models\role_permissions\role_module_permissions;
use App\Models\role_permissions\role_modules;
use App\Models\role_permissions\roles;
use App\Role;
use Illuminate\Http\Request;

class rolesAndPermissions extends BaseController
{

    public function getALLRoles(Request $request): \Illuminate\Http\JsonResponse
    {
        return $this->getResponse(roles::all());
    }

    public function getModulesRoles(): \Illuminate\Http\JsonResponse
    {
        $modules = modules::with("modulePermissions")->get();

        return $this->getResponse($modules);
    }

    public function createNewRole(Request $request): \Illuminate\Http\JsonResponse
    {

        //explode permissions
        $permissions = explode(",", $request->permissions);

        //create In Role Table   if in the request id that's mean it will be updated
        $role = roles::createUpdateRole($request->get('name'),$request->get('id'));

        // create Role Modules  get Role Modules
        permissions::createRoleModulesByPermissions($permissions, $role->id);

        //create Role Modules Permissions For thiS role
        permissions::createRoleModulesPermissions($permissions, $role->id);


        return $this->getResponse();
    }

    public function updateRolePermission(Request $request){

        //delete role module permissions for this role
        $role_modules_id=collect(role_modules::where("role_id", $request->get('id'))->select('id')->get())->pluck("id");

        role_module_permissions::whereIn('role_modules_id',$role_modules_id)->delete();

        //delete role modules
        role_modules::where('role_id',$request->get('id'))->delete();

        $this->createNewRole($request);

        return $this->getResponse();
    }


    public function getRoleWithPermission(int $role_id): \Illuminate\Http\JsonResponse
    {
        return $this->getResponse([
            "role"       => roles::find($role_id),
            "permissions" => permissions::getPermissionForRole($role_id)
        ]);
    }
}
