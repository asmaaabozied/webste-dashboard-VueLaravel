<?php

namespace App\Http\Middleware;

use Closure;
use function App\Helpers\userHasRole;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next , ...$role)
    {
        $access = true;
        if(!userHasRole(auth()->user(),[$role])) $access = false;
        if ($access) return $next($request);
        $arr = [
            'data' => null,
            'message' => 'User is not authorized',
            'error' => true,
            'status' => 403,
            'notification' => "stopped if something went wrong",
            ];
        return response()->json($arr , 433);
    }
}
