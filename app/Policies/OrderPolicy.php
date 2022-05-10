<?php

namespace App\Policies;

use App\Order;
use App\User;
use function App\Helpers\userHasRole;

class OrderPolicy extends DenyPolicy
{
    public function viewAny(User $user)
    {
        if (userHasRole($user, ["system_manager"])) {
            return true;
        }
       return false;
    }

    public function view(User $user, Order $order)
    {
        $this->checkOrderPermission('show', $user , $orderEmployee);

    }

    public function create(User $user)
    {
        return $this->checkOrderPermission('create', $user );

    }

    public function update(User $user, Order $order)
    {
        $this->checkOrderPermission('update', $user , $order);
    }


    public function delete(User $user, Order $order)
    {
        $this->checkOrderPermission('delete', $user , $order);
    }

    public function restore(User $user, Order $order)
    {
        $this->checkOrderPermission('restore', $user , $order);

    }

    protected function checkOrderPermission($method, $user , Order $order=null) {
        $access=false;
        if(userHasRole($user,["system_manager"])){
            return true;
        }
        if(userHasRole($user,["maintenance_manager"])){
            return true;
        }
        if ($method == 'create' || $method == 'delete') {
            if (userHasRole($user, ["technical_manager"]) || !is_null($user->customer)) return true;
        }
       if($method== 'show'){
            $orderEmployee=$order->orderEmployee;
            if($user->id==$orderEmployee->employee_id||$user->id==$order->user_id){
                $access=true;
            }
        }
        /*for the employee update*/
        elseif ($method == 'restore'){
            $orderEmployee=$order->orderEmployee;
            if($user->id==$orderEmployee->employee_id){
                $access=true;
            }
        }
        /*for the customer update*/
        elseif ($method == 'update'){
            if($user->id==$order->user_id){
                $access=true;
            }
        }
        return $access;
    }
}
