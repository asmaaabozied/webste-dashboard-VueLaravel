<?php

namespace App\Http\Controllers\Api\v2;

use App\ContentManagement;
use App\Exceptions\PublicException;
use App\Http\Requests\ContentManagementRequest;
use App\Http\Controllers\BaseController;
use App\Http\Resources\Api\v2\ContentManagementResource;

class ContentManagementController extends BaseController
{
    private $permission_module_name = "content";

    function __construct()
    {
        $this->tableName = 'content_management';
        parent::__construct();
    }


    public function index()
    {
        try {

            $this->checkUserHasPermission("show", $this->permission_module_name);

            $request = request()->all();

            if (isset($request['only']) && is_array($request['only'])) {
                $model = ContentManagement::orderBy('created_at', 'desc')->get($request['only']);
            } else {
                $model = ContentManagement::getWithOrderByDesc();
            }
            $result = ContentManagementResource::collection($model);
            return $this->getResponse($result);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }


    public function store(ContentManagementRequest $request)
    {
        try {
            $this->checkUserHasPermission("store",$this->permission_module_name);
            return $this->getResponse(ContentManagement::create($request->validated()), myTrans('add_success'), 200);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }

    }


    public function show($id)
    {
        try {
            $this->checkUserHasPermission("show specific",$this->permission_module_name);
            return $this->ShowCustomElement(ContentManagement::class, $id, ContentManagementResource::class, myTrans('resource_not_found'));
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }

    }


    public function update(ContentManagementRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            return $this->UpdateCustomElement(ContentManagement::class, $id, $request, myTrans('resource_not_found'));
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }


    public function destroy($id)
    {
        try {
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            return $this->DeleteCustomElement(ContentManagement::class, $id);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }
}
