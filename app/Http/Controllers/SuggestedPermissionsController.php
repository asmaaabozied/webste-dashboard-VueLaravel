<?php

namespace App\Http\Controllers;
use App\Exceptions\PublicException;
use App\Http\Requests\SuggestedPermissionsRequest;
use App\Role;
use Illuminate\Http\Request;
use function App\Helpers\getAllPermission;
use function App\Helpers\getPermissionFormArray;
use function App\Helpers\getRoles;

class SuggestedPermissionsController extends BaseController
{

    /**
     * SuggestedPermissionsController constructor.
     * @throws PublicException
     * @author karam mustafa
     */
    public function __construct()
    {
        // here this is not table | but in permission config
        $this->tableName = 'show_suggestion';
        parent::__construct();
    }

    /**
     * @param SuggestedPermissionsRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @author karam mustafa
     */
    public function suggestion(SuggestedPermissionsRequest $request) {
        $permission = $request->validated();
        $role_name = $permission['role_name'];
        $roles = getRoles();
        foreach ($roles as $index => $item){
            if ($role_name == $index){
                return $this->getResponse(getPermissionFormArray($item));
            }

        }
        throw new PublicException('no data please make sure you are select correct role ');
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function allPermissions() {
        return $this->getResponse(getPermissionFormArray(getAllPermission()));
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function allRole() {
        return $this->getResponse(Role::all()->pluck('name'));
    }

}
