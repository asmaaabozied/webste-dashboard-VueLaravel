<?php

namespace App\Policies;

use App\Rating;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\userHasRole;

class RatingPolicy extends DenyPolicy
{
    public function index(User $user)
    {
        if (userHasRole($user,['system_manager'])) return true;
        return false;
    }

    public function update(User $user)
    {
        $rating = Rating::find(Route::current()->parameters['rating']);
        return $user->id === $rating->user_id;
    }

    public function destroy(User $user)
    {
        $rating = Rating::find(Route::current()->parameters['rating']);
        return $user->id === $rating->user_id;
    }
}
