<?php

namespace App\Policies;

use App\gallery;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;

class GalleryPolicy extends DenyPolicy
{

    public function getGalleryAccess(User $user)
    {
        if (userHasRole($user, mainManagerRoles())) return true;

        $id      = Route::current()->parameter('gallery') ?? null;
        $gallery = gallery::findOrFail($id);
        if (isset($user->gallery)) {
            return $gallery->user_id == $user->id;
        }
        else {
            return $this->deny(myTrans('type_account_not_gallery'));
        }
    }

    public function index(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }
}

