<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

/**
 * Class Lang
 * @author karam mustafa
 * @package App\Http\Middleware
 */
class Lang
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
        if (\request()->query('local')
            && in_array(\request()->query('local'), ['ar', 'en'])
        ) {
            app()->setLocale(\request()->query('local'));
        } else {
            app()->setLocale(Auth::user()->lang ?? 'en');
        }
        return $next($request);
    }
}
