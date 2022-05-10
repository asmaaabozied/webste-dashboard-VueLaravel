<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\SuggestionRequest;
use App\Http\Resources\Api\v2\SuggestionResource;
use App\Http\Resources\Collection\Api\v2\SuggestionCollection;
use App\Suggestion;
use Auth;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerAndDepartment;
use function App\Helpers\managerOrderRole;
use function App\Helpers\userHasRole;

class SuggestionController extends BaseController
{
    private $permission_module_name="suggestions";

    public function __construct()
    {
        $this->tableName = 'suggestions';
        parent::__construct();
    }

    public function index()
    {
        $user = Auth::user();
        // for system admin
        if (userHasRole($user,mainManagerRoles())){
            return $this->getAllData(SuggestionCollection::class , Suggestion::class);
        }
        // for manager on his department
        else if (userHasRole($user,managerOrderRole())){
            $data = Suggestion::whereHas('department' , function ($query) use ($user){
                return $query->where('name' , managerAndDepartment()[$user->role]) ?? null;
            })->orderBy('created_at', 'desc');
            return $this->getAllData(SuggestionCollection::class , Suggestion::class , $data);
        }
        // for customer and gallery
        else if(userHasRole($user,['customer' , 'gallery'])) {
            $data = Suggestion::where('user_id' , $user->id)
                ->orderBy('created_at', 'desc');
            return $this->getAllData(SuggestionCollection::class , Suggestion::class , $data);
        }
    }

    public function store(SuggestionRequest $request)
    {
        try {
        $data = $request->validated();
        $data['user_id'] = Auth::user()->id;
        $final = Suggestion::create($data);
        return $this->getResponse($final, myTrans('add_success'), 200);
        }catch (\Exception $e){
            self::throwException(__CLASS__ , __LINE__ , $e);
        }
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        return $this->ShowCustomElement(Suggestion::class, $id, SuggestionResource::class, myTrans('resource_not_found'));
    }

    public function update(SuggestionRequest $request, $id)
    {
        $this->checkUserHasPermission("update",$this->permission_module_name);
        $suggestion = Suggestion::findOrFail($id);
        try {
            $data = $request->validated();
            $data['user_id'] = $suggestion->id;
            $suggestion->update($data);
            return $this->getResponse($suggestion, myTrans('update_success'), 200);
        }catch (\Exception $e){
            self::throwException(__CLASS__ , __LINE__ , $e);
        }
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy",$this->permission_module_name);
        return $this->DeleteCustomElement(Suggestion::class, $id, myTrans('resource_not_found'));
    }
}
