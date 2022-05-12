<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Http\Requests\LangRequest;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UsersRequest;
use App\Http\Resources\Api\v2\UserResource;
use App\Http\Resources\Api\v2\UsersResource;
use App\User;
use App\Users;

use App\Customer;
use Auth;


/**
 * Class UserController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v2
 */
class UserController extends BaseController
{
    public function __construct()
    {
        $this->tableName = 'users';
        $page = ['index', 'create', 'edit', 'destroy'];
        $crud = ['read_all', 'create', 'update', 'delete'];
        foreach ($page as $item1) {
            foreach ($crud as $item2) {
                $this->middleware(['permission:' . $item2 . '_users'])->only($item1);
            } //  end foreach
        } //  end foreach

        parent::__construct();
    }

    public function getAllUser()
    {
        $service = UsersResource::collection(User::all());

        return $this->getResponse($service);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = UserResource::collection(User::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
       $final =  User::create($request->all());
       return $this->getResponse($final, myTrans('add_success'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->ShowCustomElement(Users::class, $id, UserResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        return $this->UpdateCustomElement(User::class, $id, $request, myTrans('resource_not_found'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \App\Exceptions\PublicException
     */
    public function destroy($id)
    {
        return $this->DeleteCustomElement(User::class, $id, myTrans('resource_not_found'));
    }

    /**
     * @param LangRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function changeLang(LangRequest $request) {
        Auth::user()->update(['lang' => $request->lang]);
        return $this->getResponse(Auth::user(), myTrans('update_success'), 200);
    }


    public function getUser($itemId): \Illuminate\Http\JsonResponse
    {
        //    $this->checkUserHasPermission("show Specific", $this->permission_module_name);
        return $this->getResponse( new UsersResource(Users::find($itemId)));
    }


    public function deleteItem(int $itemId): \Illuminate\Http\JsonResponse
    {

        // $this->checkUserHasPermission("destroy", $this->permission_module_name);


        $user = User::find($itemId);



        $user->delete();

        return $this->getResponse(null, myTrans('delete_success'), 200);

    }



    public function statusItem(int $itemId): \Illuminate\Http\JsonResponse
    {

        // $this->checkUserHasPermission("destroy", $this->permission_module_name);


        $user = User::find($itemId);

        $status=( $user->status == 0)?1:0;
        $user->status=$status;
        $user->save();


        return $this->getResponse(null, myTrans('delete_success'), 200);

    }

    public function createUser(UsersRequest $request){

        // if (is_null($request->get('id'))) {
        //     $this->checkUserHasPermission('store', $this->permission_module_name);
        // }
        // else {
        //     $this->checkUserHasPermission('update', $this->permission_module_name);
        // }





         if($request->id !=='create' && $request->id >0){



            $user = Users::where('id',$request->id)->first();

            $user->user_name = $request->get("user_name") ?? '';
            $user->password =bcrypt($request->get("password"))  ?? '';
            $user->type = $request->get("type") ?? '';
            $user->role_id = $request->get("role_id") ?? '';
            $user->employee_id = $request->get("employee_id") ?? '';
            $user->save();
            $customer=Customer::where('user_id',$request->id)->first();
            $customer->name= $user->user_name ?? '';
            $customer->phone= $request['phone'] ?? '';
            $customer->user_id= $user->id;
            $customer->save();


         }


            else {

                $user = User::create([
                    "user_name" => $request['user_name'],
                    "password"  => $request['password'],
                    "role"      => 'customer',
                    "type"=>$request['type'],
                    'role_id'=>$request['role_id'],
                    'employee_id'=>$request['employee_id']
                ]);

                Customer::create([
                    "name"     => $user->user_name,
                    "phone"    => $request->phone,
                    "user_id"  => $user->id,

                ]);

                }






        return $this->getResponse();
    }

    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|string|null
     * @author karam mustafa
     */
    public function logout()
    {
        return auth()->user();
        auth()->user()->token()->revoke();
        return 'logged out'; // modify as per your need
    }

    /**
     * @param string $confirmationKey
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function confirmUser(string $confirmationKey)
    {
        $user = auth()->user();
        $storedConfirmationKey = $user->confirmationKey;
        if ($storedConfirmationKey == $confirmationKey) {
            $user->is_verified = true;
            $user->confirmationKey()->delete();
            return $this->getResponse(null, myTrans('user_confirmed'), null, 200);
        } else {
            return $this->getResponse(null, myTrans('confirmation_key_incorrect'), null, 400);
        }
    }
}
