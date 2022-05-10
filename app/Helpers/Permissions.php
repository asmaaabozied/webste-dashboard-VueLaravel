<?php

namespace App\Helpers;

use App\Exceptions\AccessException;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

trait Permissions
{
    public static function Check($user, $tableName, $message)
    {
        // set permission null first , we will determine later
        $permission = null;

        // this array determine what is route and what his action can do with permission
        $arr = array('GET' => 'read', 'PUT' => 'update', 'PATCH' => 'update', 'POST' => 'create', 'DELETE' => 'delete');
        // get request method ( get , post ..)
        $requestType = request()->method();
        if ($requestType == 'GET') {
            $permission = 'read_all';
            if (sizeof(Route::current()->parameters) > 0) {
                // this mean this route is get custom element from resource route
                $permission = 'read_custom';
            }
        } else if (isset($arr[$requestType])) {
            // find action
            $permission = $arr[$requestType];
        } else {
            // this mean request method its not included in arr
            throw new AccessException('please check from request method');
        }
        // clear cache
        Artisan::call('cache:clear');
        if (!Auth::user()) return;
        // check from permission finally
        if (!$user->hasPermission("{$permission}_{$tableName}")) {
            // if not has this permission throw error
            throw new AccessException($message);
        }
    }
}
