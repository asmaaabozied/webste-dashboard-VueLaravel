<?php

namespace App\Policies;

use App\User;
use App\Workshop;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class WorkInPolicy extends DenyPolicy
{
    public function store(User $user)
    {
        return $this->checkFromUserRole($user);
    }

    public function delete(User $user)
    {
        return $this->checkFromUserRole($user);
    }

    protected function checkFromUserRole($user)
    {
        $access  = false;
        $message = 'this action is unauthorized or something went wrong';

        if (userHasRole($user,mainManagerRoles())) return $access = true;
        if (isset(request()->workshop_id)) {
            $workShopId = request()->workshop_id;
        }
        else {
            $workShopId = \Illuminate\Support\Facades\Route::current()->parameter('workIn') ?? $message = 'work shop not fount please make sure you insert correct id';
            $access     = false;
        }
        $workshop = Workshop::find($workShopId);
        if (isset($workshop)) {
            if (userHasRole($user,['maintenance_manager'])) {
                if ($workshop->type == "Maintenance" || $workshop->type == 1) {
                    $access = true;
                }
                else {
                    $message = myTrans('account_role_maintenance_manager_workshop_wrong');
                }
            }
            if (userHasRole($user,['installation_manager'])) {
                if ($workshop->type == "Installment" || $workshop->type == 2) {
                    $access = true;
                }
                else {
                    $message = myTrans('account_role_installation_manager_workshop_');
                }
            }
        }
        if (!$access) {
            return $this->deny($message);
        }
        return $access;
    }
}
