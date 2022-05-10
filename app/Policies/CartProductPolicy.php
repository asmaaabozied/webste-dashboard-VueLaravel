<?php

namespace App\Policies;

use App\CartProduct;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

/**
 * Class CartProductPolicy
 * @author karam mustafa
 * @package App\Policies
 */
class CartProductPolicy extends DenyPolicy
{



    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\CartProduct  $cartProduct
     * @return mixed
     */
    public function view(User $user, CartProduct $cartProduct)
    {
        $cart=$cartProduct->cart;
        return $user->id==$cart->customer_id;

        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user, CartProduct $cartProduct)
    {
        $cart=$cartProduct->cart;
        return $user->id==$cart->customer_id;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\CartProduct  $cartProduct
     * @return mixed
     */
    public function update(User $user, CartProduct $cartProduct)
    {
        $cart=$cartProduct->cart;
        return $user->id==$cart->customer_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\CartProduct  $cartProduct
     * @return mixed
     */
    public function delete(User $user, CartProduct $cartProduct)
    {
        $cart=$cartProduct->cart;
        return $user->id==$cart->customer_id;
    }

    }
