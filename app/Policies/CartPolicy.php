<?php

namespace App\Policies;

use App\Cart;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

/**
 * Class CartPolicy
 * @author karam mustafa
 * @package App\Policies
 */
class CartPolicy extends DenyPolicy
{

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Cart  $cart
     * @return mixed
     */
    public function view(User $user, Cart $cart)
    {
        return $user->id == $cart->customer_id;

    }
    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Cart  $cart
     * @return mixed
     */
    public function update(User $user, Cart $cart)
    {
        return $user->id==$cart->customer_id;

    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Cart  $cart
     * @return mixed
     */
    public function delete(User $user, Cart $cart)
    {
        return $user->id==$cart->customer_id;
    }

 }
