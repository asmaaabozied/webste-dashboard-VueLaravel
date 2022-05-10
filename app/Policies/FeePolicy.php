<?php

namespace App\Policies;

use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class FeePolicy extends DenyPolicy
{

    public function store(User $user): bool
    {
        return userHasRole($user, mainManagerRoles());
    }

    public function show(User $user): bool
    {
        return userHasRole($user, array_merge(mainManagerRoles(), ['consulting_manager', 'maintenance_manager', 'installation_manager', 'technical_manager']));
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
