<?php

namespace App\Policies;

use App\Transaction;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerOrderRole;
use App\OrderEmployee;
use App\MaintenanceOrder;
use function App\Helpers\userHasRole;

class TransactionPolicy extends DenyPolicy
{
    public function viewAny(User $user)
    {
        $role = Auth::user()->role;
        if ($role != 'admin' and $role != 'manager' and $role != 'sales_manager' and $role != 'customer') {
            throw new PublicException(
                'you cant show transaction'
            );
        }
    }

    public function transactionPolicy(User $user)
    {
        return userHasRole($user,array_merge(mainManagerRoles(), ['sales_manager', 'customer']));
    }

    public function transactionPolicyWithUserCheck(User $user)
    {
        $transId = Route::current()->parameter('transaction');
        $transModel = Transaction::find($transId);
        if (!isset($transModel)) $this->deny(myTrans('resource_not_found'));
        if (isset($user->cart)) {
            if (!userHasRole($user,array_merge(mainManagerRoles()))) {
                return $transModel->cart->user_id == $user->id;
            }
            return userHasRole($user,array_merge(mainManagerRoles(), ['sales_manager']));
        }
    }

    public function isEmploy(User $user)
    {

        if (userHasRole($user,['technical'])) {
            $rel = OrderEmployee::where([
                'employee_id' => $user->employee->id,
                'order_id' => MaintenanceOrder::findOrFail(Route::current()->parameter('id'))->order_id,
            ])->first()->count();

            return (userHasRole($user,['technical']) && $rel->count());
        } else if (userHasRole($user,array_merge(mainManagerRoles()))) {
            return 1;
        } else {
            return 0;
        }
    }

    public function ShowDetils(User $user)
    {
        $Transaction = Transaction::find(Route::current()->parameter('id'));

        if (userHasRole($user,['technical'])) {
            if (!is_null($Transaction->maintenance_order_id)) {
                $rel = OrderEmployee::where([
                    'employee_id' => $user->employee->id,
                    'order_id' => MaintenanceOrder::findOrFail($Transaction->maintenance_order_id)->order_id,
                ])->first()->count();

                return (userHasRole($user,['technical']) && $rel);
            } else {
                return (userHasRole($user,['technical']));
            }
        } else if (userHasRole($user,array_merge(managerOrderRole()))) {
            return 1;
        }
        else if (userHasRole($user, ['customer'])) {
            return $Transaction->user->id == $user->id;
        }
        else {
            return 0;
        }
    }
}
