<?php

namespace App\Policies;

use App\PreventionMaintenanceOrder;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\maintenanceOrderRole;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class PreventionMaintenanceOrderPolicy extends DenyPolicy
{

    public function getPreventionMaintenanceByRoles(User $user)
    {
        $access = userHasRole($user,array_merge(maintenanceOrderRole() , ['customer']));
        if ($access){
            if (userHasRole($user,['customer'])) {
                $id = Route::current()->parameter('PreventionMaintenanceOrder');
                $getOrder = PreventionMaintenanceOrder::findOrFail($id);
                if ($user->id != $getOrder->order->user_id) return false;
            }
        }
        return $access;
    }

    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public function index(User $user)
    {
        return  userHasRole($user,array_merge(maintenanceOrderRole()));
    }

    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public  function store(User $user){
        return userHasRole($user,array_merge(maintenanceOrderRole() , ['customer']));
    }

    public function orderFinished(User $user){
        return userHasRole($user,array_merge(mainManagerRoles()));
    }
}
