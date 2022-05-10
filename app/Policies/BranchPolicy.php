<?php

namespace App\Policies;

use App\User;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class BranchPolicy extends DenyPolicy
{
    public function branchAuthorize(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }
}
