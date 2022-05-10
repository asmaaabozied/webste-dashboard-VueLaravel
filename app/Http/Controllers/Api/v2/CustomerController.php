<?php

namespace App\Http\Controllers\Api\v2;

use App\Customer;
use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\CustomerRequest;
use App\Http\Requests\CustomerRrequest;
use App\Http\Resources\Api\v2\CustomerRecource;
use App\Http\Resources\Collection\Api\v2\CustomerCollection;
use Auth;


class CustomerController extends BaseController
{

    private $permission_module_name = "customer";

    public function __construct()
    {
        $this->tableName = 'customers';
        parent::__construct();
    }


    public function index()
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        return $this->getAllData(CustomerCollection::class, Customer::class);
    }


    public function store(CustomerRequest $request)
    {

//        $data = $request->validated();
//        $data['user_id'] = Auth::user()->id;
//        $final = Customer::create($data);
//        return $this->getResponse($final, myTrans('add_success'), 200);
    }


    public function show($id)
    {
        $this->checkUserHasPermission("customer access",$this->permission_module_name);
        return $this->ShowCustomElement(Customer::class, $id, CustomerRecource::class, myTrans('resource_not_found'));
    }


    public function update(CustomerRequest $request, $id)
    {
        $data = $request->all();
       $this->checkUserHasPermission("customer access",$this->permission_module_name);
        if (isset($request['lat']) && isset($request['lon'])) {
            $data['location'] = json_encode([
                "lat" => $request['lat'],
                "lon" => $request['lon'],
            ]);
        }
        if (!isset($data['name'])) {
            $data['name'] = $data['user_name'] ?? null;
        }
        $customer = Customer::findOrFail($id);
        $customer->update($data);
        $customer->user->update($data);
        return $this->getResponse($customer, myTrans('edit_success'));
    }


    public function destroy($id)
    {
        $this->checkUserHasPermission("customer access", $this->permission_module_name);
        try {
            $customer = Customer::where('id', $id)->first();
            if (!is_null($customer)) {
                if (isset($customer->user)) {
                    $customer->user->delete();
                } else {
                    $customer->delete();
                }
            } else {
                throw new PublicException(
                    myTrans('resource_not_found')
                );
            }
        } catch (\Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
        return $this->getResponse(myTrans('delete_success'));
    }
}
