<?php

namespace App\Policies;

use App\Department;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerAndDepartment;
use function App\Helpers\managerOrderRole;
use function App\Helpers\managerRoles;
use function App\Helpers\userHasRole;

class DepartmentPolicy extends DenyPolicy
{
    public function index(User $user)
    {
        return userHasRole($user, managerOrderRole());
    }

    public function show(User $user)
    {
        if (userHasRole($user, mainManagerRoles())) return true;
        if (userHasRole($user, managerRoles())) {
            $id  = Route::current()->parameter('department') ?? null;
            $dep = Department::findOrFail($id);
            if ($dep->name == managerAndDepartment()[$user->role]) {
                return true;
            }
            else {
                return $this->deny(myTrans('access_denied_for_this_dep'));
            }
        }
    }

    public function store(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function update(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function destroy(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }
}
