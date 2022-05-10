<?php

namespace App\Policies;

use App\OrderEmployee;
use App\User;
use App\WorkIn;
use function App\Helpers\userHasRole;

class OrderEmpoyeePolicy extends DenyPolicy
{
    public function viewAny(User $user)
    {
        $this->checkOrderPermission('viewAny', $user);
    }

    public function view(User $user, OrderEmployee $orderEmployee)
    {
        $this->checkOrderPermission('show', $user, $orderEmployee);
    }


    public function create(User $user, OrderEmployee $orderEmployee)
    {
        $this->checkOrderPermission('create', $user, $orderEmployee);
    }


    public function delete(User $user, OrderEmployee $orderEmployee)
    {
        $this->checkOrderPermission('delete', $user, $orderEmployee);
    }


    protected function checkOrderPermission($method, $user, OrderEmployee $orderEmployee = null)
    {
        $access = false;
        if (userHasRole($user,["system_manager"])) {
            return true;
        }
        if ($method == 'create' || $method == 'delete') {
            if (userHasRole($user,["technical_manager"])) {
                $employee = $user->employee;
                $workIns  = $mployee->workIns;
                foreach ($workIns as $workIn) {
                    $work = WorkIn::where('employee_id', '=', $orderEmployee->employee_id, ' and')
                        ->where('workshop_id', '=', $workIn->workshop_id);
                    if (!is_null(work)) {
                        $access = true;
                    }
                }
            }

        }
        elseif ($method == 'show') {
            $order = $orderEmployee->order;
            if ($user->id == $orderEmployee->employee_id || $user->id == $order->user_id || userHasRole($user,["technical_manager"])) {
                $access = true;
            }
        }
        elseif ($method == 'update') {
            if ($user->id == $orderEmployee->employee_id) {
                $access = true;
            }
        }
        return $access;
    }
}
