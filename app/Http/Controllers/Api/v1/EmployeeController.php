<?php

namespace App\Http\Controllers\Api\v1;

use App\Exceptions\PublicException;
use App\Http\Requests\GiveCarRequest;
use App\Http\Requests\OrderEmployeeRequest;
use App\Http\Resources\Api\v2\OrderResource;
use App\Models\role_permissions\roles;
use App\Order;
use App\OrderEmployee;
use Illuminate\Http\Request;
use App\Http\Requests\EmployeeRequest;
use Illuminate\Support\Facades\Validator;
use DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Api\v1\WorkshopResource;
use App\Http\Controllers\BaseController;
use App\User;
use Illuminate\Support\Facades\File;
use App\Http\Resources\Api\v1\EmployeeResource;
use App\Employee;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class EmployeeController extends BaseController
{

    protected $imagePath              = 'files/images/employee_images/';
    private   $pagination             = 10;
    private   $permission_module_name = "employee";

    function __construct()
    {
        $this->tableName = 'employees';
        parent::__construct();
    }


    protected $type = [
        'technical',
    ];


    public function index(Request $request)
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);

        $user = Auth::user();
        if (isset($request->pagination)) {
            $this->pagination = $request->pagination;
        }

        if ($user->role == 'technical') {
            $employee = Employee::with('orders')->findOrFail(Auth::user()->id)->paginate($this->pagination);
            return $this->getResponse(OrderResource::collection($employee->orders));
        } else if ($user->role == 'consulting_manager') {
            return $this->getResponse(EmployeeResource::collection(Employee::whereHas('user', function ($q) {
                return $q->where('role', 'consulting_employee');
            })->with('orders')->paginate($this->pagination)));
        } elseif (
            $user->role == 'maintenance_manager' ||
            $user->role == 'technical_manager' ||
            $user->role == 'installation_manager'
        ) {
            if (isset($request->q)) {
                return $this->getResponse(EmployeeResource::collection(Employee::where('name', 'like', '%' . $request->q . '%')->whereHas('user', function ($q) {
                    return $q->where('role', 'technical');
                })->with('orders')->paginate($this->pagination)));
            } else {
                return $this->getResponse(EmployeeResource::collection(Employee::whereHas('user', function ($q) {
                    return $q->where('role', 'technical');
                })->with('orders')->paginate($this->pagination)));
            }
        }

        $data = EmployeeResource::collection(Employee::getWithOrderByDesc()->forPage($request->page, $this->pagination));
        return $this->getResponse($data);
    }

    public function getWorkshops($id)
    {
        $employee = Employee::find($id);
        //check if this table has custom id
        if (!is_null($employee)) {
            $data = WorkshopResource::collection($employee->workIns->workshop);
            return $this->getResponse($data);
        } else {

            return $this->getResponse(null, myTrans('no_data_return'), 400);
        }
    }

    public function store(EmployeeRequest $request)
    {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        /*
         * password will be hashed automatically from user table  (accessor)
         * we create user first then create this employee ( that's why we required user_name , password in request body )
         * */

        $request->request->add(["role_id", roles::getRoleIdByName($request->get('role'))]);
        $input = $request->validated();
        //this function will create user before this employee
        $user = $this->saveUser($request->all());
        $input['id'] = $user->id;
        // save employee image
        $input['image'] = $this->SaveFile($request->image, 'image', null, $this->imagePath);
        $input['name'] = $input['user_name'];

        $data = Employee::create($input);
        $data['id'] = $user->id;
        return $this->getResponse(new EmployeeResource($data), myTrans('add_success'), 200);
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy", $this->permission_module_name);
        $emp = Employee::find($id);

      //  return $emp;

        if (!is_null($emp)) {
            File::delete('employee_images/' . $emp->image);
            // $user = $emp->user;
            // $workins = $emp->workIns;
            // foreach ($workins as $workin) {
            //     $workin->delete();
            // }
            $emp->delete();
            //delete the user account
            // $user->delete();

            // if exist retrun resoponse this table with data wich has custom data
            return $this->getResponse(null, myTrans('delete_success'), 200);
        } else {
            return $this->getResponse(null, myTrans('resource_not_found'), 400);
        }
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show specific", $this->permission_module_name);

        return $this->ShowCustomElement(Employee::class, $id, EmployeeResource::class, myTrans('resource_not_found'));
    }

    public function update(EmployeeRequest $request, $id)
    {
         $this->checkUserHasPermission("update", $this->permission_module_name);

        $model_check = Employee::with('user')->findOrFail($id);
        $allEmp = Employee::where('id_number', $request->id_number)->where('id', '!=', $id)->first();
        if (isset($allEmp)) throw new PublicException('this id number is already exist');
        $data = $request->validated();
        $model_check->user->update($data);
        if (isset($data['image'])) {
            $data['image'] = $this->SaveFile($request->image, 'image', null, $this->imagePath);
        }
        $data['name'] = $data['user_name'];
        $model_check->update($data);
        return $this->getResponse(Employee::find($id), myTrans('update_success'), 200);
    }

    public function giveCar(GiveCarRequest $request)
    {
        $this->checkUserHasPermission("give car",$this->permission_module_name);
        $employee = Employee::findOrFail($request->employee_id);
        if ($employee->car_id != null) {
            throw new PublicException(myTrans('already_have_car'));
        }
        $employee->update([
            'car_id' => $request->car_id
        ]);
        return $this->getResponse(null, myTrans('given_car_successful'), 200);
    }

    public function takeCar(Request $request)
    {
        $this->checkUserHasPermission("take car",$this->permission_module_name);
        $validator = Validator::make($request->all(), [
            'employee_id' => 'required|exists:employees,id',
        ]);
        if (!$validator->fails()) {
            $employee = Employee::findOrFail($request->employee_id)->update([
                'car_id' => null
            ]);
            return $this->getResponse(null, myTrans('taken_car_successfully'), 200);
        }
        return $this->getResponse(null, $validator->errors('employee_id'), 422);
    }

    public function addEmployeesToOrder(OrderEmployeeRequest $request)
    {
        $this->checkUserHasPermission("order employee",$this->permission_module_name);
        $order = Order::findOrFail($request->order_id);
        //$this->checkIfCustomerIsCredit($order->user_id);
        if ($order->getAttributes()['status'] < 1) {
            if ($order->type != "consultant_order") {
                throw new PublicException(myTrans('order_not_accept'));
            }
        }
        $this->checkIfUserCancelOrderBeforeMove(null, $order);
        try {
            $this->checkEmployeeRole($request, $order, 'consultant_order', 'consulting_employee');
            $this->checkEmployeeRole($request, $order, 'installment_order', 'technical');
            $this->checkEmployeeRole($request, $order, 'maintenance_order', 'technical');
            $checkIdOrderHasThisEmployee = OrderEmployee::where([
                'employee_id' => $request->employee_id, 'order_id' => $order->id
            ])->first();
            if (isset($checkIdOrderHasThisEmployee)) {
                throw new PublicException(myTrans('order_has_this_employee'));
            }
            $order->employees()->syncWithoutDetaching($request->employee_id);
            $order->update(["status" => "2"]);
            $dataForManager = [
                'users' => User::whereIn('role', ['maintenance_manager', 'technical_manager'])->get(),
                'message' => ["employee_to_order", "add_new_employee_message_for_customer", null, $order->id, $order->type],
            ];
            $dataForCustomer = [
                'users' => User::where('id', $order->user_id)->get(),
                'message' => ["employee_to_order", "add_new_employee_message_for_customer", $request->order_id, $order->id, $order->type],
            ];
            $dataForEmply = [
                'users' => User::where('id', $request->employee_id)->get(),
                'message' => ["employee_to_order", "add_new_employee_message_for_customer", $request->order_id, $order->id, $order->type],
            ];
            $this->sendMessageToUsers($dataForEmply);
            $this->sendMessageToUsers($dataForManager);
            $this->sendMessageToUsers($dataForCustomer);
        } catch (\Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            self::throwException(__CLASS__, __LINE__, $e);
        }
        return $this->getResponse($order, myTrans('add_success'));
    }

    public function deleteEmployeesFromOrder(OrderEmployeeRequest $request)
    {
        $this->checkUserHasPermission("order employee",$this->permission_module_name);
        $order = Order::findOrFail($request->order_id);
        try {
            $order->employees()->detach($request->employee_id);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        return $this->getResponse(myTrans('delete_success'));
    }

    private function checkEmployeeRole($request, $order, string $orderType, string $emp)
    {
        $otherType = array_merge(mainManagerRoles(), [
            'technical_manager', 'consulting_manager'
        ]);
        $consultantType = array_merge(mainManagerRoles(), [
            'consulting_manager'
        ]);
        if ($order->type == $orderType) {
            foreach ($request->employee_id as $item) {
                $employee = Employee::find($item);
                if (isset($employee)) {
                    if (!userHasRole($employee->user,[$emp])) {
                        if (userHasRole($employee->user,['consulting_employee']) && !userHasRole(Auth::user(),[$consultantType])) {
                            throw new PublicException(myTrans('cant_add_consultant_emp'));
                        }
                        if (userHasRole($employee->user,['technical']) && !userHasRole(Auth::user(),[$otherType])) {
                            throw new PublicException(myTrans('job_for_technical_consulting_manager'));
                        }
                        throw new PublicException('this employee with id ' . $employee->user->id . ' is not ' . str_replace("_", ' ', $emp));
                    }
                } else {
                    throw new PublicException(myTrans('employee_not_exists') . " : " . $item);
                }
            }
        }
    }
}
