<?php

namespace App\Http\Controllers\Api\v2;

use App\gallery;
use App\Http\Controllers\BaseController;
use App\Http\Requests\galleryRequest;
use App\Http\Resources\Api\v2\galleryResource;

class GalleryController extends BaseController
{
    private $permission_module_name = "gallery";

    public function __construct()
    {
        $this->tableName = 'galleries';
        parent::__construct();
    }


    public function index()
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        $data = galleryResource::collection(gallery::getWithOrderByDesc());
        return $this->getResponse($data);
    }


    public function confiremGallery($id)
    {

        $this->checkUserHasPermission("confirem",$this->permission_module_name);
        $gallery = gallery::findOrFail($id);
        $gallery->update(['isConfirmed' => 1]);
        return $this->getResponse($gallery);
    }


    public function store(galleryRequest $request)
    {
        $this->checkUserHasPermission("store", $this->permission_module_name);
        $data = $request->validated();
        $data['role'] = 'gallery';
        $data['name'] = $data['user_name'];
        $galleryUser = $this->saveUser($data);
        $data['user_id'] = $galleryUser->id;
        $data['location'] = json_encode([
            "lat" => $request['lat'],
            "lon" => $request['lon'],
        ]);

        $final = gallery::create($data);
        return $this->getResponse($final, myTrans('add_success'), 200);
    }


    public function show($id)
    {
        $this->checkUserHasPermission("show specific", $this->permission_module_name);
        return $this->ShowCustomElement(gallery::class, $id, galleryResource::class, myTrans('resource_not_found'));
    }


    public function update(galleryRequest $request, $id)
    {
        $this->checkUserHasPermission("update", $this->permission_module_name);
        $data  = $request->validated();
        $final = gallery::findOrFail($id);
        if (isset($request['lat']) && isset($request['lon'])) {
            $data['location'] = json_encode([
                "lat" => $request['lat'],
                "lon" => $request['lon'],
            ]);
        }
        $final->update($data);
        $final->user->update($data);
        return $this->getResponse($final, myTrans('update_success'), 200);

    }


    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);
        $gallery = gallery::findOrFail($id);
        try {
            $gallery->user->delete();
        }catch (\Exception $e){
            self::throwException(__CLASS__ , __LINE__ , $e);
        }
        return $this->getResponse(myTrans('delete_success'));
    }
}
