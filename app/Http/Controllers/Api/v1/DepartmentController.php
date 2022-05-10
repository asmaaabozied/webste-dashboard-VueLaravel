<?php

namespace App\Http\Controllers\Api\v1;

use App\Exceptions\PublicException;
use App\Department;
use App\Http\Resources\Api\v1\DepartmentResource;
use App\Http\Controllers\BaseController;
use App\Http\Resources\Api\v1\WorkshopResource;
use App\Http\Requests\StoreDepartmmentRequest;
use App\Http\Requests\DepartmintEditRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class DepartmentController extends BaseController
{

    private $pagination             = 10;
    private $permission_module_name = "department";
    function __construct()
    {
        $this->tableName = 'departments';
        parent::__construct();
    }


    public $successStatus = 200;

    public function index(Request $request)
    {

        try {

            $this->page = ($request->page - 1) * 10;
            $Department = Department::all();
            if (isset($request->pagination)) {
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(DepartmentResource::collection($Department)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function getWorkshops($id)
    {
        $department = Department::find($id);
        //check if this table has custom id
        if (!is_null($department)) {
            $this->checkUserHasPermission("show",$this->permission_module_name);
            $data = WorkshopResource::collection($department->workshops);
            return $this->getResponse($data);
        } else {
            return $this->getResponse(null, myTrans('no_data_return'), 400);
        }
    }

    public function store(StoreDepartmmentRequest $request)
    {
          $this->checkUserHasPermission("store",$this->permission_module_name);
        $request->validated();
        $input = $request->all();
        $path = "files/images/department_images/";
        $input['image'] = $this->SaveFile($request->image, 'image', null, $path);
        $data = Department::create($input);
        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        return $this->getResponse(new DepartmentResource(Department::find($id)));
    }

    public function update(DepartmintEditRequest $request, $id)
    {
        $this->checkUserHasPermission("update", $this->permission_module_name);
        $input = $request->validated();
        if ($id > 0 && $id < 7) {
            unset($input['name']);
            unset($input['name_ar']);
        }
        $path = "files/images/department_images/";
        if (isset($input['image'])) {
            $input['image'] = $this->SaveFile($request->image, 'image', null, $path);
        }
        $data = Department::findOrFail($id)->update($input);
        return $this->getResponse(Department::findOrFail($id), myTrans('update_success'), 200);
    }

    public function destroy($id)
    {
        if ($id > 0 && $id < 7) {
            throw new PublicException(myTrans('delete_static_department'));
        }
        $department = Department::find($id);
        if (!is_null($department)) {
         $this->checkUserHasPermission("destroy", $this->permission_module_name);

            $worksops = $department->workshops;

            if (!isset($worksops[0])) {

                File::delete('department_images/' . $department->image);
                $department->delete();
                return $this->getResponse(null, myTrans('delete_success'), 200);
            } else {
                return $this->getResponse(null, myTrans('department_not_empty'), 400);
            }


            // if exist retrun resoponse this table with data wich has custom data

        } else {
            return $this->getResponse(null, myTrans('resource_not_found'), 400);
        }
    }

    public function getDepartments()
    {
        return $this->getResponse(DepartmentResource::collection(Department::getWithOrderByDesc()));
    }

    public function getDepartment($id)
    {
        return $this->getResponse(new DepartmentResource(Department::find($id)));
    }
}
