<?php

namespace App\Http\Resources\Api\v2;

use App\Customer;
use App\Employee;
use App\Exceptions\PublicException;
use App\Http\Resources\Api\v1\EmployeeResource;
use App\Http\Resources\Collection\Api\v2\SuggestionCollection;
use App\Message;
use App\Order;
use App\OrderReviewOrder;
use App\Role;
use App\Suggestion;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Auth;
use mysql_xdevapi\Exception;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\maintenanceOrderRole;
use function App\Helpers\managerAndDepartment;
use function App\Helpers\managerOrderRole;
use function App\Helpers\userHasRole;


class UserResource extends JsonResource
{
    private $ordpagination = 10;
    private $sugpagination = 10;
    private $msgpagination = 10;

    protected $typeWithFunc = [
        'admin' => 'responseForMainManager',
        'system_manager' => 'responseForMainManager',
        'maintenance_manager' => 'responseForMainManager',
        'technical' => 'responseForTechnical',
        'consulting_employee' => 'responseForTechnical',
        'technical_manager' => 'responseForTechnicalManager',
        'installation_manager' => 'responseForInstallationManager',
        'hr_manager' => 'responseForHrManager',
        'consulting_manager' => 'responseForConsultingManager',
        'customer' => 'responseForAgent',
        'gallery' => 'responseForAgent',
    ];

    protected  $orderStatus = [
        'received' => 0,
        'order is being processed' => 1,
        'order under maintenance' => 2,
        'order finish' => 3,
        'order declined' => 4,
        'order declined by client' => 5,
        'order finish with unfixed device' => 6,
    ];
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     * @throws PublicException
     */
    public function toArray($request)
    {
        try {


            $user = User::find($this->id);

            $ag = $this->notAgent($user, $user->employee);

            if ($user->employee != null)
                $dep = $this->isCustomer($user, $user->employee->department_id);
            else
                $dep = 0;


            $cust = $this->isCustomer($user, $user->customer);

            $gal = $this->isGallery($user, $user->gallery);

//            $ordre = $this->isCustomer($user, $this->getOrderReviewOrder());

            if ($request->atype == '1') {
                $arr = [
                    'id' => $this->id,
                    'user_name' => $this->user_name,
                    'type' => $this->type,
                    'role' => $this->role,
                    'lang' => $this->lang,
                    'user_department_id' => ($ag == '' ? 0 : $ag->department_id),
                    'customer_info' => ($cust == '' ? null : $cust),
                    'employee_info' => ($ag == '' ? null : $ag),
                    'galleries_info' => ($gal == '' ? null : $gal),
                    'order_info' => $this->getOrder($this->id) ?? null,
                    'suggestion_info' => SuggestionResource::collection(Suggestion::where('user_id', $this->id)->orderBy('id', 'desc')->paginate($this->sugpagination)),
                    'suggestion_for_department' => $this->notAgent($user, $this->getSuggestionDepartment($this)),
                    'messages' => MessageResource::collection(Message::where(['user_id' => $this->id, 'response_message_id' => null])->orderBy('created_at', 'desc')->orderBy('id', 'desc')->paginate($this->msgpagination)),
                    // 'order_review_order' => $this->getOrderReviewOrder(), //($ordre ==''?null:$ordre),
                    'created_at' => $this->created_at,
                    'updated_at' => $this->updated_at,
                ];
            } else if ($request->atype == '2') {
                $arr = [
                    'id' => $this->id,
                    'user_name' => $this->user_name,
                    'type' => $this->type,
                    'role' => $this->role,
                    'lang' => $this->lang,
                    'user_department_id' => ($ag == '' ? 0 : $ag->department_id),
                    'customer_info' => ($cust == '' ? null : $cust),
                    'employee_info' => ($ag == '' ? null : $ag),
                    'galleries_info' => ($gal == '' ? null : $gal),
                    'order_info' => null, //$this->getOrder($this->id),
                    'suggestion_info' => SuggestionResource::collection(Suggestion::where('user_id', $this->id)->orderBy('id', 'desc')->paginate($this->sugpagination)),
                    'suggestion_for_department' => $this->notAgent($user, $this->getSuggestionDepartment($this)),
                    'messages' => MessageResource::collection(Message::where(['user_id' => $this->id, 'response_message_id' => null])->orderBy('created_at', 'desc')->orderBy('id', 'desc')->paginate($this->msgpagination)),
                    // 'order_review_order' => ($ordre == '' ? null : $ordre),
                    'created_at' => $this->created_at,
                    'updated_at' => $this->updated_at,
                ];
            } else if ($request->atype == '3') {
                $arr = [
                    'id' => $this->id,
                    'user_name' => $this->user_name,
                    'type' => $this->type,
                    'role' => $this->role,
                    'lang' => $this->lang,
                    'user_department_id' => ($ag == '' ? 0 : $ag->department_id),
                    'customer_info' => ($cust == '' ? null : $cust),
                    'employee_info' => ($ag == '' ? null : $ag),
                    'galleries_info' => ($gal == '' ? null : $gal),
                    'order_info' => null, //$this->getOrder($this->id),
                    'suggestion_info' => null,
                    'suggestion_for_department' => $this->notAgent($user, $this->getSuggestionDepartment($this)),
                    'messages' => null,
                    // 'order_review_order' => null,
                    'created_at' => $this->created_at,
                    'updated_at' => $this->updated_at,
                ];
            }
            if (userHasRole(Auth::user(),managerOrderRole())) {
                $arr += ['employee_by_manager' => $this->getEmployeeByManagerAuth($this)];
            }
            return $arr;
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @return OrderReviewOrder[]|\Illuminate\Database\Eloquent\Collection
     * @throws PublicException
     * @author karam mustafa
     */
    protected function getOrderReviewOrder()
    {
        try {
            $user = Auth::user();
            if (userHasRole($user,['maintenance_manager'])) {
                return OrderReviewOrder::all();
            } else {
                return OrderReviewOrder::where('user_id', $user->id)->get();
            }
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @throws PublicException
     * @author karam mustafa
     */
    protected function getOrder($id)
    {
        try {
            $user = Auth::user();
            return $this->userDetector($user);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param $user
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @throws PublicException
     * @author karam mustafa
     */
    protected function getEmployeeByManagerAuth($user)
    {
        try {
            if ($user->role == 'consulting_manager') {
                return EmployeeResource::collection(Employee::whereHas('user', function ($q) {
                    return $q->where('role', 'consulting_employee');
                })->paginate($this->ordpagination));
            } elseif (
                $user->role == 'maintenance_manager' ||
                $user->role == 'technical_manager' ||
                $user->role == 'installation_manager'
            ) {
                return EmployeeResource::collection(Employee::whereHas('user', function ($q) {
                    return $q->where('role', 'technical');
                })->paginate($this->ordpagination));
            }
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param $user
     * @return |null
     * @throws PublicException
     * @author karam mustafa
     */
    protected function getSuggestionDepartment($user)
    {
        try {

            if (userHasRole(User::find($user->id),managerOrderRole())) {
                if (!userHasRole(User::find($user->id),['system_manager', 'admin'])) {
                    return Suggestion::whereHas('department', function ($query) use ($user) {
                        return $query->where('name', managerAndDepartment()[$user->role]) ?? null;
                    })->paginate($this->ordpagination);
                }
            } else {
                return null;
            }
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @return array
     * @throws PublicException
     * @author karam mustafa
     */
    protected function permission()
    {
        try {
            $arr = [];
            foreach (User::find($this->id)->allPermissions() as $item) {
                array_push($arr, $item->name);
            }
            return $arr;
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @desc this function is determine user role , and run the function to return his data based on his role.
     * @param $user
     * @return mixed
     * @throws PublicException
     * @author karam mustafa
     */
    private function userDetector($user)
    {

        try {
            $func = $this->typeWithFunc[$user->role];
            return array_key_exists($user->role, $this->typeWithFunc)
                ? $this->$func($user)
                : $this->responseForAgent($user);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Object $user
     * @return
     * @throws PublicException
     * @author karam mustafa
     */
    private function responseForMainManager($user = null)
    {
        try {
            $query = Order::whereIn('type', ['maintenance_order', 'prevention_maintenance_order',])->where('user_id',auth()->user()->id)->orderBy('updated_at', 'DESC');
            if (request()->status)
                $query->where('status', $this->orderStatus[request()->status]);

            if (request()->type)
                $query->whereIn('type', [request()->type]);
            $orders = $query->paginate($this->ordpagination);

            if (request()->id)
                return [new OrderResource(Order::findOrFail(request()->id))];

            return OrderResource::collection($orders);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Object $user
     * @return
     * @throws PublicException
     * @author karam mustafa
     */
    private function responseForTechnical($user = null)
    {
        try {
            $employee = Employee::with('orders')
                ->orderByDesc('updated_at')
                ->findOrFail(Auth::user()->id);
            $query = $employee->orders()->orderBy('updated_at', 'desc')->whereNotIn('status', [3, 4, 5, 6]);

            if (request()->status)
                $query->where('status', $this->orderStatus[request()->status]);

            if (request()->type)
                $query->whereIn('type', [request()->type]);
            $orders = $query->get();

            if (request()->id)
                return [new OrderResource(Order::findOrFail(request()->id))];

            return OrderResource::collection($orders);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Object $user
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @throws PublicException
     * @author karam mustafa
     */
    private function responseForTechnicalManager($user = null)
    {
        try {
            $query = Order::whereIn('type', [
                'maintenance_order',
                'installment_order',
            ])->where('status', '>=', 1)->where('user_id',auth()->user()->id)->orderBy('updated_at', 'DESC');

            if (request()->status)
                $query->where('status', $this->orderStatus[request()->status]);

            if (request()->type)
                $query->whereIn('type', [request()->type]);
            $orders = $query->paginate($this->ordpagination);

            if (request()->id)
                return [new OrderResource(Order::findOrFail(request()->id))];

            return OrderResource::collection($orders);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Object $user
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @throws PublicException
     * @author karam mustafa
     */
    private function responseForInstallationManager($user = null)
    {
        try {
            $query = Order::whereIn('type', [
                'installment_order',
            ])->where('user_id',auth()->user()->id)->orderBy('updated_at', 'DESC');

            if (request()->status)
                $query->where('status', $this->orderStatus[request()->status]);

            if (request()->type)
                $query->whereIn('type', [request()->type]);
            $orders = $query->paginate($this->ordpagination);

            if (request()->id)
                return [new OrderResource(Order::findOrFail(request()->id))];

            return OrderResource::collection($orders);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Object $user
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @throws PublicException
     * @author karam mustafa
     */
    private function responseForHrManager($user = null)
    {
        try {
            $query = Order::where('type', 'job_application_order')->where('user_id',auth()->user()->id)->orderBy('updated_at', 'DESC');

            if (request()->status)
                $query->where('status', $this->orderStatus[request()->status]);

            if (request()->type)
                $query->whereIn('type', [request()->type]);
            $orders = $query->paginate($this->ordpagination);

            if (request()->id)
                return [new OrderResource(Order::findOrFail(request()->id))];

            return OrderResource::collection($orders);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Object $user
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @throws PublicException
     * @author karam mustafa
     */
    private function responseForConsultingManager($user = null)
    {
        try {
            $query = Order::where('type', "consultant_order")->where('user_id',auth()->user()->id)->orderBy('updated_at', 'DESC');

            if (request()->status)
                $query->where('status', $this->orderStatus[request()->status]);

            if (request()->type)
                $query->whereIn('type', [request()->type]);
            $orders = $query->paginate($this->ordpagination);

            if (request()->id)
                return [new OrderResource(Order::findOrFail(request()->id))];

            return OrderResource::collection($orders);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Object $user
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @throws PublicException
     * @author karam mustafa
     */
    private function responseForAgent($user = null)
    {
        try {
            if (isset(request()->isFinished)) {
                $status = request()->isFinished ? [3, 4, 5, 6] : [0, 1, 2];
                $query = Order::whereIn('status', $status)->where('user_id', $user->id)->orderBy('updated_at', 'desc');
                if (request()->status)
                    $query->where('status', $this->orderStatus[request()->status]);

                if (request()->type)
                    $query->whereIn('type', [request()->type]);
                $orders = $query->paginate($this->ordpagination);

                if (request()->id)
                    return [new OrderResource(Order::findOrFail(request()->id))];

                return OrderResource::collection($orders);
            } else {
                $query = Order::where('user_id', $user->id)->orderBy('updated_at', 'desc');

                if (request()->status)
                    $query->where('status', $this->orderStatus[request()->status]);

                if (request()->type)
                    $query->whereIn('type', [request()->type]);

                $orders = $query->paginate($this->ordpagination);

                if (request()->id)
                    return [new OrderResource(Order::findOrFail(request()->id))];

                return OrderResource::collection($orders);
            }
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param $user
     * @param $returned
     * @return bool
     * @throws PublicException
     * @author karam mustafa
     */
    private function notAgent($user, $returned)
    {
        try {

            if ($user->role =="customer" || $user->role == "gallery"){
                return '';
            }else{
                return $returned;
            }

        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param User $user
     * @param $param
     * @return string
     * @throws PublicException
     * @author karam mustafa
     */
    private function isCustomer($user, $param)
    {
        try {

            if ($user->role == "customer") {
                return $param;
            }
            else {
                return "";
            }

        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param User $user
     * @param $gallery
     * @return string
     * @throws PublicException
     * @author karam mustafa
     */
    private function isGallery($user, $gallery)
    {
        try {
            if ($user->role == "customer"){
                return $gallery;
            }else{
                return "";
            }

        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }
}
