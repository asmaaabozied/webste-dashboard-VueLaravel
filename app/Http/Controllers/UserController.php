<?php

namespace App\Http\Controllers;


use App\Http\Requests\LangRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\Api\v2\UserResource;
use App\Http\Resources\Api\v2\UsersResource;
use App\User;
use Auth;


/**
 * Class UserController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v2
 */
class UserController extends Controller
{




    public function createUser(UserRequest $request){

        // if (is_null($request->get('id'))) {
        //     $this->checkUserHasPermission('store', $this->permission_module_name);
        // }
        // else {
        //     $this->checkUserHasPermission('update', $this->permission_module_name);
        // }





         if($request->id=='create'){

            $user = User::create([
                "user_name" => $request['user_name'],
                "password"  => $request['password'],
                "role"      => 'customer',
                "type"=>$request['type']
            ]);

            Customer::create([
                "name"     => $user->user_name,
                "phone"    => $request->phone,
                "user_id"  => $user->id,

            ]);

            }


            else {

                $user = User::find($request->id);
                $user->user_name = $request->get("user_name") ?? '';
                $user->password =bcrypt($request->get("password"))  ?? '';
                $user->type = $request->get("type") ?? '';
                $user->customer->name= $user->user_name ?? '';
                $user->customer->phone= $request['phone'] ?? '';
                $user->customer->user_id= $user->id;
                $user->save();


        }



        return $this->getResponse();
    }


}
