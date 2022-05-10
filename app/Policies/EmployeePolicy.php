<?php

namespace App\Policies;

use App\Employee;
use App\Order;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\hardOrderRole;
use function App\Helpers\hardOrderRoleWithEmployee;
use function App\Helpers\hardOrderRoleWithoutEmployee;

use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class EmployeePolicy extends DenyPolicy
{
    public function getEmployeeByRoles(User $user)
    {
        $access = userHasRole($user, array_merge(hardOrderRoleWithEmployee()));
        if ($access) {
            if (userHasRole($user, ['consulting_employee', 'technical'])) {
                $id          = Route::current()->parameter('employee');
                $getEmployee = Employee::findOrFail($id);
                if ($user->id != $getEmployee->id) return false;
            }
        }
        return $access;
    }

    public function index(User $user)
    {
        return userHasRole($user, hardOrderRoleWithoutEmployee());
    }

    public function store(User $user)
    {
        return userHasRole($user, hardOrderRoleWithoutEmployee());
    }


    public function givCarToEmployee(User $user)
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['maintenance_manager']));
    }

    public function takeCarFromEmployee(User $user)
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['maintenance_manager']));
    }

    public function orderEmployeeProcess(User $user)
    {
        $order = Order::findOrFail(request()->order_id);
        if ($order->type == 'installment_order'
            || $order->type == 'maintenance_order'
            || $order->type == 'consultant_order'
        ) {
            return userHasRole($user, array_merge(mainManagerRoles(), ['technical_manager', 'consulting_manager']));
        }
        else {
            return $this->deny(myTrans('order_type_wrong'));
        }
    }
}
