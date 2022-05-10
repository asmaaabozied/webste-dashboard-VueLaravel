<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth; 

use Closure;

class EmployeeMiddleware
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
        $user = Auth::user(); 
        if(!isset($user)||is_null($user->employee)){
          $error='you are unathurized  ';
                return response()->json(['error'=>$error], 401); 
                 }
        return $next($request);  
        }
}
