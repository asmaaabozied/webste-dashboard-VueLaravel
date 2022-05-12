<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\ServicesAddRequest;
use App\Http\Requests\ServicesEditRequest;
use App\Http\Resources\Api\v2\ServiceResource;
use App\Http\Resources\Api\v2\ServicesResource;

use App\Models\Service;
use Illuminate\Http\Request;


class ServiceController extends BaseController
{
    private $permission_module_name = "services";

    public function __construct()
    {
        $this->useConstrcut = false;
        parent::__construct();
    }

    public function getAllService(Request $request)
    {
        $service = ServiceResource::collection(Service::all());

        return $this->getResponse($service);
    }

    public function getAllServiceForAdminPanel(): \Illuminate\Http\JsonResponse
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        return $this->getResponse(Service::all());
    }

    public function createService(ServicesAddRequest $request)
    {


        $this->checkUserHasPermission("store", $this->permission_module_name);

        $request->validated();
        $input = $request->all();
        $path = "files/images/services_images/";
        $input['img'] = "/storage/".$path.$this->SaveFile($request->image, 'image', null, $path);
        $data = Service::create($input);
        $role=$request['role_id'];
        // $url=preg_replace('/\?first_name=[^\&]*\&last_name=[^\&]*/', '', $role);
        // $str = ltrim($role, 'g');
        $str = explode("'",$role);//became here an array with numbers
        $arr = explode(',',implode('',$str));
        $str = array_map(function($val){
return intval($val);
        },$arr
    );



        $data->roles()->sync($str);

        return $this->getResponse($data, myTrans('add_success'), 200);

    }

    public function updateService(ServicesEditRequest $request)
    {

        $this->checkUserHasPermission("update", $this->permission_module_name);
        $input = $request->all();
        $path = "files/images/department_images/";

        if ($request->file('image')) {
            $input['img'] = "/storage/" . $path . $this->SaveFile($request->image, 'image', null, $path);
            unset($input["image"]);
            unset($input["id"]);
        }
        $data=Service::find($request->id);
        Service::find($request->id)->update($input);

        $role=$request['role_id'];
        $str = explode("'",$role);//became here an array with numbers
        $arr = explode(',',implode('',$str));
        $str = array_map(function($val){
return intval($val);
        },$arr
    );



        $data->roles()->sync($str);

        return $this->getResponse(Service::findOrFail($request->id), myTrans('update_success'), 200);
    }

    public function deleteItem(int $itemId): \Illuminate\Http\JsonResponse
    {

        $this->checkUserHasPermission("destroy", $this->permission_module_name);
        if ($itemId > 0 && $itemId < 7) {
            throw new PublicException(myTrans('delete_static_department'));
        }

        $service = Service::find($itemId);

        if (is_null($service)) {
            return $this->getResponse(null, myTrans('department_not_empty'), 400);
        }

        $service->delete();

        return $this->getResponse(null, myTrans('delete_success'), 200);

    }

    public function getService($itemId): \Illuminate\Http\JsonResponse
    {
           $this->checkUserHasPermission("show Specific", $this->permission_module_name);
        return $this->getResponse( new ServicesResource(Service::find($itemId)));
    }

}
