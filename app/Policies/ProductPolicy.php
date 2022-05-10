<?php

namespace App\Policies;

use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class ProductPolicy extends DenyPolicy
{
    public function productPolicy(User $user): bool
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['sales_manager']));
    }
}
