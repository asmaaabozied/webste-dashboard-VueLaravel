<?php

namespace App\Policies;

use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class ContentManagementPolicy extends DenyPolicy
{
    public function contentManagementAuthorize(User $user): bool
    {
        return userHasRole($user, mainManagerRoles());
    }
}
