<?php

namespace App\Policies;

use App\MaintenanceOrder;
use App\OrderEmployee;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\maintenanceOrderRole;
use function App\Helpers\userHasRole;

class MaintenanceOrderPolicy extends DenyPolicy
{
    public function getMaintenanceOrderByRoles(User $user)
    {
        $access = userHasRole($user, array_merge(maintenanceOrderRole(), ['customer']));
        $id     = Route::current()->parameter('MaintenanceOrder');
        if (empty($id)) {
            $id = request()->order_id ?? null;
        }
        if ($access) {
            if (in_array($user->role, ['customer', 'gallery'])) {
                $getOrder = MaintenanceOrder::findOrFail($id);
                if ($user->id != $getOrder->order->user_id) return false;
            }
        }

        if (userHasRole($user, ['technical'])) {
            $rel = OrderEmployee::where([
                'employee_id' => $user->employee->id,
                'order_id'    => MaintenanceOrder::findOrFail($id)->order_id,
            ])->first();
            if (!isset($rel)) {
                return $this->deny(myTrans('employee_not_assigned_for_this_order'));
            }
            return true;
        }
        return $access;
    }


    public function getSparePartAsync(User $user)
    {
        if (userHasRole($user, array_merge(mainManagerRoles(), ['technical', 'technical_manager', 'maintenance_manager']))) {
            if (userHasRole($user, mainManagerRoles())) {
                return true;
            }
            $rel = OrderEmployee::where([
                'employee_id' => $user->employee->id,
                'order_id'    => MaintenanceOrder::findOrFail(request()->maintenance_order_id)->order_id,
            ])->first();
            if ($rel == null || !isset($rel)) {
                return $this->deny(myTrans('you_do_wrong_process_maybe'));
            }
            return true;
        }
    }


    public function changeOrderToWithoutWarranty(User $user)
    {
        $access = userHasRole($user, array_merge(mainManagerRoles(), ['customer']));
        $id     = Route::current()->parameter('maintenanceOrderId');
        if (!isset($id)) {
            return $this->deny(myTrans('resource_not_found'));
        }
        if ($access) {
            if (userHasRole($user, ['customer'])) {
                $getOrder = MaintenanceOrder::with('order')->findOrFail($id);
                return $user->id == $getOrder->order->user_id;
            }
        }
    }


    public function TechManagerDeterminePrice(User $user)
    {
        return userHasRole($user,
            array_merge(mainManagerRoles(), ['technical_manager'])
        );
    }


    public function index(User $user)
    {
        return userHasRole($user,maintenanceOrderRole());
    }

    public function store(User $user)
    {
        return userHasRole($user,array_merge(maintenanceOrderRole(), ['customer']));
    }

    public function checkUpFee(User $user)
    {
        return userHasRole($user,array_merge(mainManagerRoles(), ['maintenance_manager', 'technical_manager']));
    }

}
