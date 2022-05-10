<?php

namespace App\Policies;

use App\Suggestion;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerAndDepartment;
use function App\Helpers\managerOrderRole;
use function App\Helpers\userHasRole;


class SuggestionPolicy extends DenyPolicy
{

    public function getSuggestionAccess(User $user)
    {
        if (userHasRole($user, mainManagerRoles())) return true;
        if (userHasRole($user, managerOrderRole())) {

            $id = Route::current()->parameter('suggestion') ?? null;
            $suggestion = Suggestion::with('department')->findOrFail($id);
            if ($suggestion->user_id == $user->id) return true;
            $userDepartmentNameByManager = managerAndDepartment()[$user->role];
            $depName = $suggestion->department->name;
            if ($depName == $userDepartmentNameByManager){
                return true;
            }else{
                return $this->deny(myTrans('access_denied_for_this_dep'));
            }
        }elseif (userHasRole($user,['customer' , 'gallery'])){
            $id = Route::current()->parameter('suggestion') ?? null;
            $suggestion = Suggestion::findOrFail($id);
            return $suggestion->user_id == $user->id;
        }
    }
}
