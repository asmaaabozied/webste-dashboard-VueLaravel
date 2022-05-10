<?php

namespace App\Policies;

use App\ConsultantOrder;
use App\OrderEmployee;
use App\User;

use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class ConsultantOrderPolicy extends DenyPolicy
{
    public function getConsultantByRoles(User $user)
    {
        $id     = Route::current()->parameter('ConsultantOrder');
        $access = userHasRole($user, array_merge(mainManagerRoles(), ['consulting_manager', 'customer']));
        if ($access) {
            if (userHasRole($user,['customer'])) {
                $getOrder = ConsultantOrder::find($id);
                if ($user->id != $getOrder->order->user_id) return false;
            }
        }
        if (userHasRole($user,['consulting_employee'])) {
            $rel = OrderEmployee::where([
                'employee_id' => $user->employee->id,
                'order_id'    => ConsultantOrder::findOrFail($id)->order_id,
            ])->first();
            if (!isset($rel)) {
                return $this->deny(myTrans('employee_not_assigned_for_this_order'));
            }
            return true;
        }
        return $access;
    }

    public function index(User $user): bool
    {
        return userHasRole($user,array_merge(mainManagerRoles(), ['consulting_manager', 'customer', 'consulting_employee']));
    }

    public function store(User $user): bool
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['consulting_manager', 'customer']));
    }
}
