<?php

namespace App\Policies;

use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class SparePartPolicy extends DenyPolicy
{
    public function index(User $user): bool
    {
        return userHasRole($user,
            array_merge(mainManagerRoles(), ['maintenance_manager'])
        );
    }

    public function store(User $user): bool
    {
        return userHasRole($user,
            array_merge(mainManagerRoles(), ['maintenance_manager'])
        );
    }

    public function update(User $user): bool
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['maintenance_manager']));
    }


    public function show(User $user): bool
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['maintenance_manager']));
    }

    public function destroy(User $user): bool
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['maintenance_manager']));
    }
}
