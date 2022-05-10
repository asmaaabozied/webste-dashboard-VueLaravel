<?php

namespace App\Policies;

use App\Exceptions\PublicException;
use App\User;
use App\Workshop;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerRoles;
use function App\Helpers\userHasRole;

class WorkshopPolicy extends DenyPolicy
{
    public function index(User $user)
    {
        if (
            userHasRole($user, ["technical_manager", "installation_manager", "maintenance_manager", 'system_manager',
                                'admin',]) ||
            User::checkUserHasPermission("show", "work shop")
        ) {
            return true;
        }
        return false;
    }

    public function show(User $user)
    {
        return $access = $this->checkWorkshopAccess($user, 'show');
    }

    public function store(User $user)
    {
        if (userHasRole($user, managerRoles()))
            return true;
    }

    public function update(User $user)
    {
        return $access = $this->checkWorkshopAccess($user, 'update');
    }


    public function delete(User $user)
    {
        return $access = $this->checkWorkshopAccess($user, 'delete');
    }

    protected function checkWorkshopAccess($user, $action)
    {
        $access = false;
        if (userHasRole($user,mainManagerRoles())) {
            $access = true;
        }
        $id       = \Illuminate\Support\Facades\Route::current()->parameter("workshop");
        $workshop = Workshop::findOrFail($id);
        if ($workshop->type == "Maintenance" || $workshop->type == 1) {
            if (userHasRole($user,array_merge(mainManagerRoles(), ["maintenance_manager"]))) {
                $access = true;
            }
            else {
                throw new PublicException(myTrans('not_maintenance_manager'));
            }
        }
        if ($workshop->type == "Installment") {
            if (userHasRole($user,array_merge(mainManagerRoles(), ["installation_manager"])) || $workshop->type == 2) {
                $access = true;
            }
            else {
                throw new PublicException(myTrans('not_installment_manager'));
            }
        }
        return $access;
    }
}
