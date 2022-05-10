<?php

namespace App\Policies;

use App\Department;
use App\Message;
use App\User;
use Illuminate\Support\Facades\Route;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerAndDepartment;
use function App\Helpers\userHasRole;

class MessagePolicy extends DenyPolicy
{

    public function getMessageAccess(User $user)
    {
        if (userHasRole($user, mainManagerRoles())) return true;
        $id      = Route::current()->parameter('Message') ?? null;
        $message = Message::findOrFail($id);
        $dep     = Department::findOrFail($message->department_id);
        if (
            isset(managerAndDepartment()[$user->role]) &&
            $dep->name == managerAndDepartment()[$user->role]
        ) return true;
        return $user->id == $message->user_id;
    }

    public function getAllMessageForAdmin(User $user)
    {
        return userHasRole($user, mainManagerRoles());
    }
}
