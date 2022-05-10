<?php

namespace App\Http\Middleware;

use App\Exceptions\PublicException;
use App\User;
use Closure;
use Illuminate\Support\Facades\Auth;


class VerificationCustomersAndGalleries
{

    public function handle($request, Closure $next)
    {

        $loginStatus = true;
        if (isset($request->user_name) && isset($request->password)) {
            if ($request->getPathInfo() == '/api/login') {
                $loginStatus = Auth::attempt(['user_name' => $request->user_name, 'password' => $request->password]);
            }
        }
        if ($loginStatus) {
            if (Auth::check()) {
                $user = User::with('gallery')->find(Auth::user()->id);
                try {
                    $this->checkConfirm($user);
                } catch (\Exception $exception) {
                    if ($exception instanceof PublicException) {
                        throw new PublicException($exception->getMessage() ,$exception->getCode());
                    }
                }
            } else {
                throw new PublicException(myTrans('UNAUTHORISED_LOGIN'));
            }
        }
        return $next($request);
    }

    /**
     * @param $user
     * @throws PublicException
     * @author karam mustafa
     */
    private function checkConfirm($user)
    {
        if (
            $user->role == 'gallery' &&
            isset($user->gallery) &&
            $user->gallery->isConfirmed != 1
        ) throw new PublicException(myTrans('account_not_approved') , 400);
        if ($user->role == 'customer'
        ) {
            if ($user->is_verified != 1) {
                throw new PublicException(myTrans('check_confirm_keys_first'), 403);
            }
        }
    }
}
