<?php

namespace App\Policies;

use App\Order;
use App\OrderReviewOrder;
use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class OrderReviewOrderPolicy extends DenyPolicy
{

    public function getOrderReviewOrderByRoles(User $user)
    {
        if (userHasRole($user,array_merge(mainManagerRoles(), ['maintenance_manager']))) return true;
        $id      = \Illuminate\Support\Facades\Route::current()->parameter('OrderReviewOrder');
        $orderRv = OrderReviewOrder::findOrFail($id);
        if ($orderRv->user_id == $user->id) {
            $order = Order::where('id', request()->order_id)->first();
            if ($order->user_id != $user->id) {
                return $this->deny(myTrans('user_not_have_this_order'));
            }
        }
    }

    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public function index(User $user)
    {
        if (userHasRole($user,
            array_merge(mainManagerRoles(), ['maintenance_manager', 'customer', 'gallery'])
        )) return true;
    }

    /**
     * @param User $user
     * @return bool|\Illuminate\Auth\Access\Response
     * @author karam mustafa
     */
    public function store(User $user)
    {
        if (userHasRole($user,
            array_merge(mainManagerRoles(), ['maintenance_manager'])
        )) return true;
        $order = Order::where('id', request()->order_id)->first();
        if ($order->getAttributes()['status'] != 3) {
            return $this->deny("this order not finish yet !");
        }
        if ($order->user_id != $user->id) {
            return $this->deny(myTrans('user_not_have_this_order'));
        }
        return true;
    }
}
