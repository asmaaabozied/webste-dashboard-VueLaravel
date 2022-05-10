<?php

namespace App\Http\Controllers\Api\v1;

use App\Branch;
use App\Exceptions\PublicException;
use App\Http\Requests\WorkshopEditRequest;
use App\Http\Resources\Collection\Api\v2\workShopCollection;
use App\Http\Resources\Api\v1\WorkshopResource;
use App\Workshop;
use App\Http\Controllers\BaseController;
use App\Http\Requests\WorkshopRequest;
use Illuminate\Http\Response;
use App\Http\Resources\Api\v1\EmployeeResource;


class WorkshopController extends BaseController
{

    private $permission_module_name = "work shop";

    function __construct()
    {
        $this->tableName = 'workshops';
        parent::__construct();
    }

    public $successStatus = 200;


    public function index()
    {
        try{
            $this->checkUserHasPermission("show",$this->permission_module_name);
            return $this->getAllData(workShopCollection::class , Workshop::class);
            $data = WorkshopResource::collection(Workshop::getWithOrderByDesc());
            return $this->getResponse($data);
        }catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function getEmployees($id)
    {
        try{
            $workshop =  Workshop::find($id);
            //check if this table has custom id
            if (!is_null($workshop)) {

                $data = EmployeeResource::collection($workshop->workIns->employee);
                return $this->getResponse($data);
            } else {

                return $this->getResponse(null, myTrans('no_data_return'), 400);
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function store(WorkshopRequest $request)
    {
        try{
            $this->checkUserHasPermission("store",$this->permission_module_name);
            $request->validated();
            $input = $request->all();
            $path = "files/images/work_shops";
            $input['image'] = $this->SaveFile($request->image, 'image', null, $path);
            $branch = Branch::find($input['branch_id']);
            $input['location'] = json_encode([
                "lat" => $branch['lat'],
                "lon" => $branch['lon'],
            ]);
            $data = Workshop::create($input);
            return $this->getResponse($data, myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function show($id)
    {
        $this->checkUserHasPermission("show specific",$this->permission_module_name);
        return $this->ShowCustomElement(Workshop::class, $id, WorkshopResource::class, myTrans('resource_not_found'));
    }

    public function update(WorkshopEditRequest $request, $id)
    {
        try{
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $workshop =  Workshop::findOrFail($id);
            $request->validated();
            $data = $request->all();
            $path = "files/images/work_shops";
            if (isset($data['image'])){
                $data['image'] = $this->SaveFile($request->image, 'image', null, $path);
            }
            $workshop->update($data);
            return $this->getResponse(Workshop::findOrFail($id), myTrans('update_success'), true);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function destroy($id)
    {
        try{
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            $work = Workshop::find($id);
            if (isset($work) && $work->workIns->isNotEmpty()) throw new PublicException(myTrans('workshop_not empty'));
            return $this->DeleteCustomElement(Workshop::class, $id, myTrans('resource_not_found'));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function getDepartments()
    {
        try{
            return $this->getResponse(WorkshopResource::collection(Workshop::getWithOrderByDesc()));

        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }


    public function getDepartment($id)
    {
        try{
            return $this->getResponse(new WorkshopResource(Workshop::find($id)));

        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

}
