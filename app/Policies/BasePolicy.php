<?php
namespace App\Policies;
use App\Exceptions\AccessException;
use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Exceptions\AccessDeniedException;
use function App\Helpers\userHasRole;

class BasePolicy
{
    protected $role;
    protected $parameter;
    protected $userRelation;

    public function __construct()
    {
        $user = Auth::user();
        if (userHasRole($user,['customer'])){
            if ($this->userRelation == 'customer'){
                if (!isset($user->customer)){
                    throw new AccessException('Access Denied  , Requested for Customer please make sure from current user');
                }
            }
        }
        if (userHasRole($user,['gallery'])){
             if ($this->userRelation == 'gallery'){
                if (!isset($user->gallery)){
                    throw new AccessException('Access Denied  , Requested for Gallery please make sure from current user');
                }
            }
        }
    }
    /**
     * @param $model
     * @param $id
     * @return Object | mixed
     * @throws PublicException
     * @author karam mustafa
     */
    public function find($model, $id)
    {
        return (new BaseController())->find($model , $id);
    }
    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public function index(User $user)
    {
        return $this->checkAdminPermission('index',"system_manager" , $user , "read_all_");
    }

    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public  function store(User $user){
        return $this->checkAdminPermission('store',"system_manager" , $user , "create_");
    }

    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public  function show(User $user){
        return $this->checkAdminPermission('show',"system_manager" , $user , "read_custom_");
    }

    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public  function update(User $user){
        return $this->checkAdminPermission('update',"system_manager" , $user , "update_");
    }

    /**
     * @param User $user
     * @return bool
     * @author karam mustafa
     */
    public  function destroy(User $user){
        return $this->checkAdminPermission('destroy',"system_manager" , $user , "delete_");
    }

/*  return the id of the customer or the gallery*/
    /**
     * @param $user
     * @return bool
     * @author karam mustafa
     */
    public function getUserRelation($user){
        if ($this->userRelation == 'customer'){
            return $user->customer->id ?? false;
        }elseif ($this->userRelation == 'gallery'){
            return $user->gallery->id ?? false;
        }
    }

    /**
     * @param $method
     * @param $role
     * @param $user
     * @param $permission
     * @return bool
     * @author karam mustafa
     */
    protected function checkAdminPermission($method , $role , $user , $permission) {
        if($this->userRelation == 'customer'){
            if ($user->hasPermission($permission."customers")){
                return $this->checkMethod($method, $user , $permission , 'customers');
            }
        }
        else if ($user->hasPermission($permission."galleries")){
            return $this->checkMethod($method, $user , $permission , 'galleries');
        }
    }

    protected function checkMethod($method , $user , $permission , $table)
    {
        if ($method =='index'){
            if ($user->hasPermission($permission.$table))  return true;
            if (userHasRole($user,[$this->parameter])) return false;
            return true;
        }
        /////////// optional
        elseif ($method == 'store'){
            $access = $user->hasPermission($permission."customers");
            return $access;
        }
        //////////
        elseif ($method == 'show' || $method == 'update' || $method == 'destroy'){
            if (userHasRole($user,['system_manager']))  return true;
            if (userHasRole($user,['admin'])){
                if ($method == 'show' && $user->hasPermission('read_custom_'.$table)) return true;
                if ($method == 'update' && $user->hasPermission('update_'.$table)) return true;
                if ($method == 'destroy' && $user->hasPermission('delete_'.$table)) return true;
            };
            $access = $this->getUserRelation($user) == Route::current()->parameters[$this->parameter] ? true : false;
            return $access;
        }
    }
}
