<?php

namespace App\Http\Controllers\Api\v1;

use App\Employee;
use App\Exceptions\PublicException;
use App\WorkIn;
use App\Http\Controllers\BaseController;
use App\Http\Requests\WorkInRequest;
use App\Http\Resources\Api\v1\CartProductResource;



class WorkInController extends BaseController
{

    private $permission_module_name = "work in";

    function __construct()
    {
        $this->tableName = 'work_ins';
        parent::__construct();
    }


    public $successStatus = 200;


    public function index()
    {

        $data = CartProductResource::collection(WorkIn::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    public function show($workShopId)
    {
        //  not's that here we use workshop_id to search for this work in
        // /////////////////////// Mostly ,  we will not use this function
        $workIn = WorkIn::where('workshop_id', $workShopId)->first();
        return $this->getResponse($workIn);
    }



    public function store(WorkInRequest $request)
    {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        $request->validated();
        $allIdForEmployeeToAdd = [];
        foreach ($request->employee_id as $item){
            $employee = Employee::find($item);
            if (!isset($employee) || is_null($employee)){
                throw new PublicException(myTrans('employee_not_exists').$item);
            }
            $checkFromEmployee = WorkIn::where(['employee_id' => $item , 'workshop_id' => $request->workshop_id])->first();
            if (!isset($checkFromEmployee)){
                array_push($allIdForEmployeeToAdd , $employee->id);
            }else{
                throw new PublicException(myTrans('employee_exists_in_workshop').$item);
            }
        }
        foreach ($allIdForEmployeeToAdd as $item ){
            try {
                WorkIn::create([
                    'workshop_id' => $request->workshop_id,
                    'employee_id' => $item,
                ]);
            }catch (Exception $e){
                throw new PublicException("Oops there is something wrong in file : ".__CLASS__ ." , Details : ".$e->getMessage());
            }
        }
        return $this->getResponse(null, myTrans('add_success'), 200);
    }


    public function destroy(WorkInRequest $request , $id)
    {
        $request->validated();
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            foreach ($request->employee_id as $item){
                $employee = Employee::find($item);
                if (!isset($employee) || is_null($employee)){
                    throw new PublicException(myTrans('employee_not_exists').$item);
                }
               $work = WorkIn::where(['employee_id' => $item , 'workshop_id' => $id])->first();
                if (!isset($work) || is_null($work)){
                    throw new PublicException(myTrans('filed_not_exists_as_employee'));
                }else {
                    try {
                        $work->delete();
                    }catch (\Exception $e){
                        throw new PublicException("Oops there is something wrong in file : ".__CLASS__ ."in line".__LINE__ ." , Details : ".$e->getMessage());
                    }
                }
            }
            return $this->getResponse(null, myTrans('delete_success'), 200);
    }
}
