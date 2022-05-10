<?php

namespace App\Policies;

use App\InstallmentOrder;
use App\OrderEmployee;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\installmentOrderRole;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class InstallmentOrderPolicy extends DenyPolicy
{
    public function getInstallmentByRoles(User $user)
    {
        $access = userHasRole($user, array_merge(installmentOrderRole()));
        $id     = Route::current()->parameter('InstallmentOrder');
        if ($access) {
            if (userHasRole($user, ['customer', 'gallery'])) {
                $getOrder = InstallmentOrder::find($id);
                if ($user->id != $getOrder->order->user_id) return false;
            }
        }
        if (userHasRole($user, ['technical'])) {
            $insOrder = InstallmentOrder::findOrFail($id);
            $rel      = OrderEmployee::where([
                'employee_id' => $user->employee->id,
                'order_id'    => $insOrder->order->id,
            ])->first();
            if (!isset($rel)) {
                return $this->deny(myTrans('employee_not_assigned_for_this_order'));
            }
            return true;
        }
        return $access;
    }

    public function index(User $user)
    {
        return userHasRole($user, installmentOrderRole());
    }

    public function store(User $user)
    {
        return userHasRole($user, installmentOrderRole());
    }

    public function checkUpFee(User $user)
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['installation_manager', 'technical_manager']));
    }
}
