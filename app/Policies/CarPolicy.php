<?php

namespace App\Policies;

use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerRoles;
use function App\Helpers\userHasRole;


class CarPolicy extends DenyPolicy
{

    public function store(User $user): bool
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function show(User $user): bool
    {
        return userHasRole($user, managerRoles());
    }


    public function update(User $user): bool
    {
        return userHasRole($user, mainManagerRoles());
    }


    public function delete(User $user): bool
    {
        return userHasRole($user, mainManagerRoles());
    }
}
