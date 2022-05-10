<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Exceptions\PublicException;
use App\gallery;
use App\Http\Requests\LogoutRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Resources\Api\v2\UserResource;
use App\Models\role_permissions\roles;
use App\UserNotificationToken;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\User;
use DB;
use function App\Helpers\myTrans;

class AuthSystemController extends BaseController
{


    public function __construct()
    {
        // here we stop parent construct from work
        $this->useConstrcut = false;
        parent::__construct();
    }



    public function login(Request $request)
    {
        $auth = Auth::attempt(['user_name' => $request->user_name, 'password' => $request->password]);

        if ($auth) {
            try {
                $user = User::find(Auth::user()->id);
                $token = $user->createToken('MyApp')->accessToken;
                return $this->getResponse(['user' => $user, 'token' => $token]);
            } catch (\Exception $e) {
                throw new PublicException($e->getMessage());
            }
        } else {
            return $this->getResponse(null, myTrans('UNAUTHORISED_LOGIN'), true, 401);
        }
    }


    public function register(RegisterRequest $request)
    {
        try {

            $user = User::create([
                "user_name" => $request->user_name,
                "password"  => $request['password'],
                "role"      => 'customer',
            ]);

            Customer::create([
                "name"     => $user->user_name,
                "phone"    => $request->phone,
                "user_id"  => $user->id,
                "location" => json_encode([
                    "lat" => $request['lat'] ?? '',
                    "lon" => $request['lon'] ?? '',
                ]),
            ]);

            $user = User::find($user->id);
            if (isset($user)) {
                return $this->getResponse(myTrans('REGISTER_WITH_CONFIRM'));
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }



    public function gallery_register(RegisterRequest $request)
    {
        try {

            $this->checkUserHasPermission("gallery register","gallery");

            $user = new User();
            $user->user_name = $request->user_name;
            $user->password = $request['password'];
            $user->role = 'gallery';
            $user->role_id=roles::getRoleIdByName('gallery');
            $user->save();


            $gallery = new gallery();
            $gallery->name = $user->user_name;
            $gallery->phone = $request->phone;
            $gallery->location = json_encode([
                "lat" => $request['lat'],
                "lon" => $request['lon'],
            ]);
            $gallery->user_id = $user->id;
            $gallery->save();
            $user = User::find($user->id);
            if (isset($user)) {
                return $this->getResponse($user,myTrans('register_gallery_success'));
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function getAuthDetails()
    {
        try {
            return $this->getResponse(new UserResource(User::find(Auth::user()->id)), myTrans('GET_USER_DETAILS_SUCCESS'));

        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    public function logout(LogoutRequest $request)
    {
        try {
            $tokenStatus = "maybe token is null ";
            $user = Auth::user();
            $token = $request->fcm_token;
            $user_notification = UserNotificationToken::where('user_id', $user->id)
                ->where('fcm_token', $token)->first();
            if (!is_null($user_notification)) {
                $user_notification->delete();
                $tokenStatus = "fcm token deleted successfully";
            }

            Auth::user()->token()->revoke();
            return $this->getResponse(null, "logout success and token status : ${tokenStatus}", 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function updatePassword(UpdatePasswordRequest $request)
    {
        try {
            $user = Auth::user();
            if (Hash::check($request->input('old_password'), $user->password)) {
                if (DB::table('users')
                    ->where('id', $user->id)
                    ->update(['password' => bcrypt($request->input('new_password'))])
                ) {
                    $success['token'] = $user->createToken('MyApp')->accessToken;
                    $success['name'] = Hash::check($request->input('new_password'), $user->password);
                    return $this->getResponse($success);
                } else {
                    throw new PublicException(myTrans('SAVE_FAILED'));
                }
            } else {
                throw new PublicException(myTrans('INVALID_PASSWORD'));
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }

}
