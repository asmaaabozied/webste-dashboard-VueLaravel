<?php

namespace App\Policies;

use App\JobApplicationOrder;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\jobAppOrderRole;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class JobApplicationOrderPolicy extends DenyPolicy
{

    public function getHrManagerRole(User $user)
    {
        $access = userHasRole($user, jobAppOrderRole());
        if ($access) {
            if (userHasRole($user, ['customer'])) {
                $cvId  = Route::current()->parameter('jobApplicationOrder');
                $getCv = JobApplicationOrder::findOrFail($cvId);
                if ($user->id != $getCv->order->user_id) return false;
            }
        }
        return $access;
    }


    public function index(User $user)
    {
        return userHasRole($user, jobAppOrderRole());
    }


    public function show(User $user)
    {
        return userHasRole($user, jobAppOrderRole());
    }

    public function store(User $user)
    {
        return userHasRole($user, jobAppOrderRole());
    }

    public function update(User $user)
    {
        $access = userHasRole($user, jobAppOrderRole());
        if ($access) {
            if (userHasRole($user, ['customer'])) {
                $cvId  = Route::current()->parameter('jobApplicationOrder');
                $getCv = JobApplicationOrder::findOrFail($cvId);
                if ($user->id != $getCv->order->user_id) return false;
            }
        }
        return $access;
    }

    public function destroy(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }
}
