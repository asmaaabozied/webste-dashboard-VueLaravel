<?php

namespace App\Policies;

use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerRoles;
use function App\Helpers\userHasRole;


class DiscountCodePolicy extends DenyPolicy
{

    public function index(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function store(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function show(User $user)
    {
        return userHasRole($user, managerRoles());
    }

    public function update(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function delete(User $user)
    {
        return userHasRole($user, mainManagerRoles());

    }
}
