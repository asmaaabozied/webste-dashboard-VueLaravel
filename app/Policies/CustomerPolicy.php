<?php

namespace App\Policies;

use App\Customer;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class CustomerPolicy extends DenyPolicy
{

    public function getCustomerAccess(User $user)
    {
        if (userHasRole($user, mainManagerRoles())) return true;

        $id       = Route::current()->parameter('customer') ?? null;
        $customer = Customer::findOrFail($id);
        if (isset($user->customer)) {
            return $customer->user_id == $user->id;
        }
        else {
            return $this->deny('type for this account is not customer');
        }

    }

    public function index(User $user): bool
    {
        return userHasRole($user, mainManagerRoles());
    }
}
