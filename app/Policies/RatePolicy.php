<?php

namespace App\Policies;

use App\Order;
use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class RatePolicy extends DenyPolicy
{
    public function checkRateOrder(User $user)
    {
        if (userHasRole($user, mainManagerRoles())) return true;
        $orderId = request()->order_id;
        if ($user->role == 'customer' || $user->role == 'gallery') {
            $order = Order::where(['id' => $orderId, 'user_id' => $user->id])->firstOrFail();
            return $user->id == $order->user_id;
        }
        else {
            return $this->deny('action_for_customer_and_gallery');
        }
    }
}
