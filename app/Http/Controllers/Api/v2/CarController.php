<?php

namespace App\Http\Controllers\Api\v2;

use App\car;
use App\Employee;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CarRequest;
use App\Http\Resources\Api\v2\CarResource;
use App\Http\Resources\Collection\Api\v2\carCollection;
use Illuminate\Support\Facades\Auth;

class CarController extends BaseController
{
    private $permission_module_name = "cars";

    public function __construct()
    {
        $this->tableName = 'cars';
        parent::__construct();
    }

    public function index()
    {
        $this->checkUserHasPermission('show all', $this->permission_module_name);
        return $this->getAllData(carCollection::class, car::class);
    }

    public function store(CarRequest $request)
    {
        $this->checkUserHasPermission('store',$this->permission_module_name);
        $data = car::create($request->validated());
        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show specific",$this->permission_module_name);
        return $this->ShowCustomElement(car::class, $id, CarResource::class, myTrans('resource_not_found'));
    }

    public function update(CarRequest $request, $id)
    {
        $this->checkUserHasPermission("update",$this->permission_module_name);
        return $this->UpdateCustomElement(car::class, $id, $request, myTrans('resource_not_found'));
    }


    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy",$this->permission_module_name);
        $checkIfEmployeeHasThisCar = Employee::where('car_id' , $id)->first();
        if (isset($checkIfEmployeeHasThisCar)){
            $checkIfEmployeeHasThisCar->update([
                'car_id' => null,
            ]);
        }
        return $this->DeleteCustomElement(car::class, $id, myTrans('resource_not_found'));
    }
}
