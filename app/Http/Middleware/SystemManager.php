<?php

namespace App\Http\Middleware;

use Closure;
use function App\Helpers\userHasRole;

class SystemManager
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!userHasRole(auth()->user(),['system_manager'])){
            $arr = [
                'data' => 'null',
                'message' => 'User is not authorized',
                'error' => true,
                'status' => 403,
                'notification' => "stopped if something went wrong",
            ];
            return response()->json($arr,403);
        }
        return $next($request);
    }
}
