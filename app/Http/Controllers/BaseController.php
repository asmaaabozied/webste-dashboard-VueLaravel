<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\DiscountCode;
use App\Events\PublicSendNotification;
use App\Exceptions\CheckDiscount;
use App\Exceptions\FileException;
use App\Exceptions\PublicException;
use App\Helpers\Permissions;
use App\Helpers\Notification;
use App\Order;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerAndOrderType;
use function App\Helpers\managerRoles;
use function App\Helpers\myTrans;
use function App\Helpers\userHasRole;


class BaseController extends Controller
{
    use Notification;

    public $notification;

    public $messageTitle = 'Inmaa';

    use Permissions;

    protected $user;

    protected $limit = 5;

    protected $tableName = '';

    protected $useConstrcut = true;


    public function __construct()
    {
        set_time_limit('60');

        if (isset(request()->limit)) {
            $validate = \Illuminate\Support\Facades\Validator::make(request()->all(), [
                'limit' => 'sometimes | numeric'
            ]);
            if ($validate->fails()) {
                throw new PublicException(myTrans('integer_required'));
            }
            $this->limit = request()->limit;
        }

        if ($this->useConstrcut) {
            $this->middleware(function ($request, $next) {
                try {
                    $this->user = Auth::user();
                    //Permissions::Check($this->user ,  $this->tableName, 'you are not allowed , permission police part');
                    return $next($request);
                } catch (\Exception $e) {
                    throw new PublicException($e->getMessage());
                }
            });
        }

        if (\request()->query('local') && in_array(\request()->query('local'), ['ar', 'en'])) {
            app()->setLocale(\request()->query('local'));
        }
    }


    public function getResponse($data = null, $message = 'SUCCESS_RESPONSE', $error = false, $status = 200, $notification = ['message' => 'empty, there is no action need to notified'])
    {
        if (gettype($error) == 'integer') $status = $error;
        if (gettype($data) == 'string') {
            $message = $data;
            $data = null;
        };
        $arr = [
            'data' => in_array($status, $this->getSuccessState()) ? $data : null,
            'message' => in_array($status, $this->getSuccessState())
                ? $message == "SUCCESS_RESPONSE" ? myTrans('SUCCESS_RESPONSE') : $message : $message,
            'error' => in_array($status, $this->getSuccessState()) ? false : $error,
            'notification info' => sizeof($notification) > 0 ? $notification : ['message' => myTrans('not_action_to_notify')],
            'status' => $status,
        ];

        return response()->json($arr, $arr['status'], ['Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'],
            JSON_UNESCAPED_UNICODE);
    }


    /**
     * @return array
     * @author karam mustafa
     */
    public function getSuccessState()
    {
        return [200, 201, 202];
    }

    /**
     * @param $resource
     * @param $model
     * @param null $specialClassQuery
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function getAllData($resource, $model, $specialClassQuery = null)
    {
        $data = null;
        if (!is_null($specialClassQuery)) {
            $data = new $resource($specialClassQuery->paginate($this->limit));
        } else {
            $data = new $resource($model::orderBy('created_at', 'desc')->paginate($this->limit));
        }
        return $this->getResponse($data);
    }

    /**
     * @param $resource
     * @param $class
     * @param $user
     * @param $table
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function getAllDataFromIndex($resource, $class, $user, $table)
    {
        $data = $resource::collection($class::getWithOrderByDesc());
        if (!$user) {
            $data = $resource::collection($class::orderBy('created_at', 'desc')->where('user_id', $user->id)->getWithOrderByDesc());
        }
        return $this->getResponse($data);
    }

    /**
     * @param $model
     * @param $id
     * @param $resources
     * @param null $message
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function ShowCustomElement($model, $id, $resources, $message = null)
    {
        $model_check = $model::find($id);
        //check if this table has custom id
        if (!is_null($model_check)) {
            // if exist return response this table with data which has custom data
            return $this->getResponse(new $resources($model_check));
        } else {
            return $this->getResponse(null, myTrans('RESOURCE_NOT_FOUND'), true, 404);
        }
    }

    /**
     * @param $model
     * @param $id
     * @param $request
     * @param $message
     * @param array $notification
     * @param null $directory
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function UpdateCustomElement($model, $id, $request, $message, $notification = [], $directory = "/")
    {
        $request->validated();
        $input = $request->all();
        $input['user_id'] = Auth::user()->id;
        $model_check = $model::find($id);
        //check if this table has custom id
        if (!is_null($model_check)) {
            if (!is_null($directory)) {
                if ($request->hasFile('image')) {
                    $image = $request->file('image');
                    // Get filename with the extension
                    $filenameWithExt = $image->getClientOriginalName();
                    // Get just filename
                    $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                    // Get just ext
                    $extension = $image->getClientOriginalExtension();
                    // Filename to store
                    $fileNameToStore = $filename . '_' . time() . '.' . $extension;
                    // Upload file
                    $path = $image->move(public_path("/" . $directory . "/"), $fileNameToStore);
                    $input['image'] = $path;
                    File::delete($directory . '/' . $model_check->image);

                }
            }
            // return $input['image'];
            $model_check->update($input);
            return $this->getResponse($model_check, myTrans('UPDATE_SUCCESS'), false, 200, $notification = []);
        } else {
            return $this->getResponse(null, $message, true, 404, $notification);
        }
    }

    /**
     * @param $model
     * @param $id
     * @param null $message
     * @param array $notification
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @author karam mustafa
     */
    public function DeleteCustomElement($model, $id, $message = null, $notification = [])
    {
        try {
            $model_check = $model::find($id);
            //check if this table has custom id
            if (!is_null($model_check)) {
                $model_check->delete();
                // if exist return response this table with data which has custom data
                return $this->getResponse(null,
                    myTrans('delete_success'), false, 200, $notification);
            } else {
                $message = $message === null ? myTrans('resource_not_found') : $message;
                throw new PublicException($message);
            }
        } catch (\Exception $e) {
            $message = "Oops there is something went wrong in file " . __CLASS__ . " in Line " . __LINE__ . " Details : " . $e->getMessage();
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage(), 404);
            }
            throw new PublicException($message);
        }
    }

    /**
     * @param $model
     * @param $id
     * @param $withStatement
     * @param null $message
     * @param array $notification
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @author karam mustafa
     */
    public function DeleteCustomElementFromRelation($model, $id, $withStatement, $message = null, $notification = [])
    {
        try {

            $model_check = $model::with($withStatement)->findOrFail($id);
            // check if relation call order relation
            if ($withStatement == 'order') {
                $user = Auth::user();
                // check if status is accepted and work on it
                if ($model_check->order->getAttributes()['status'] > 0) {
                    // check if user who do this action is not manager for this order
                    if (!userHasRole($user,[managerAndOrderType()[$model_check->order->type]]) &&
                        !userHasRole(Auth::user(),mainManagerRoles())
                    ) {
                        // if not return error message
                        return $this->getResponse(
                            null,
                            myTrans('DELETE_MESSAGE_FOR_MANAGER')
                        );
                    }
                }
            }
            $model_check = $model::with($withStatement)->findOrFail($id);
            $model_check->$withStatement->delete();
            // if exist return response this table with data which has custom data
            return $this->getResponse(null, myTrans('DELETE_SUCCESS'), false, 200, $notification);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /**
     * @param $file
     * @param $name
     * @param null $type
     * @param $path
     * @return string
     * @throws PublicException
     * @author karam mustafa
     */
    public function SaveFile($file, $name, $type = null, $path)
    {
        try {
            if (!isset($file) || is_null($file) || !request()->hasFile($name)) throw new FileException('please make sure you store correct file');
            $content_type = null;
            if ($type == 'pdf') {
                if ($file->getClientOriginalExtension() ?? 'err' != 'pdf') {
                    throw new FileException(myTrans('CV_MUST_BE_PDF'));
                }
            } else {
                $content_type = $file->getClientOriginalExtension() ?? 'err';
            }
            if (request()->hasFile($name)) {
                $pathFixing = str_replace('\\', '/', $path);
                $fileName = time() . Str::random(15) . '.' . $content_type;
                $pathToSave = storage_path('app/public/' . $pathFixing);
                $file->move($pathToSave, $fileName);
            } else {
                throw new FileException(myTrans('file_type_filed'));
            }
            return $fileName;

        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * @param null $type
     * @return mixed
     * @throws PublicException
     * @author karam mustafa
     */
    protected function saveOrder($type = null, $orderData = null)
    {
        try {
            $data = [];
            $user = Auth::user();

            if (userHasRole($user,['installation_manager', 'technical_manager', 'maintenance_manager'])) {
                $data['user_id'] = $orderData['user_id'];
                $data['employee_id'] = $user->id;
            } else {
                $data['user_id'] = Auth::user()->id;
            }
            $data['type'] = $type ?? "undefined type";
            return Order::create($this->CheckDiscountIsExsist(request(), $data));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * @param $request
     * @param $data
     * @return mixed
     * @throws PublicException
     * @author karam mustafa
     */
    protected function CheckDiscountIsExsist($request, $data)
    {
        try {
            if (isset($request->discountCode) || $request->discountCode != null || $request->discountCode != '') {
                $discountCode = DiscountCode::where('name', $request->discountCode)->first();
                if (isset($discountCode)) {
                    if (!Carbon::now()->between(
                        $discountCode->valid_from,
                        $discountCode->valid_to
                    )) {
                        throw new CheckDiscount(myTrans('discount_expired_or_not_started'));
                    }
                    $checkIfAnyOrderHasThisDis = Order::where('discount_code_id', $discountCode->id)->first();

                    if (isset($checkIfAnyOrderHasThisDis)) {

                        throw new CheckDiscount(myTrans('discount_take_before'));
                    } else {
                        $data['discount_code_id'] = $discountCode->id;
                    }
                } else {
                    throw new CheckDiscount(myTrans('undefined_discount'));
                }
            } else {
                $data['discount_code_id'] = null;
            }
            $data["payment_method"] = request()->payment_method;
            return $data;
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }


    protected function saveUser($request)
    {
        try {
            $user = User::create($request);

            return $user;
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /**
     * @param null $extraData
     * @return array
     * @throws PublicException
     * @author karam mustafa
     */
    protected function sendMessageToUsers($extraData = null)
    {
        if (!isset($extraData['title'])) $extraData['title'] = $this->messageTitle;
        $newClass = new FCMController();
        return $newClass->sendMessage($extraData);
    }

    /**
     * @param $data
     * @param string $col
     * @param null $id
     * @return \Illuminate\Support\Collection
     * @author karam mustafa
     */
    protected function getWithFilter($data, $col = 'id', $id = null)
    {
        $routeParams = Route::current()->parameters();
        $queryParams = request()->query();
        $result = $data;
        if (sizeof($queryParams) > 0 || sizeof($queryParams) > 0) {
            $result = collect($data);
            foreach (array_merge($routeParams, $queryParams) as $query => $value) {
                $result = $result->where($query, $value);
            }
        }
        return $id != null ? $result->where($col, $id)->first() : $result;
    }

    /**
     * @param null $id
     * @return void
     * @throws PublicException
     * @author karam mustafa
     */
    protected function checkIfCustomerIsCredit($id = null)
    {
        try {
            $transaction = collect(DB::table('transactions')
                ->where('user_id', $id)
                ->get());
            $creditAmount = abs($transaction
                ->where('amount', '<', 0)
                ->where('is_payed_transaction', 0)
                ->pluck('amount')
                ->sum()
            );
            if ($creditAmount !== 0) {
                throw new PublicException(myTrans('user_has_payment_before'));
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * @param $message
     * @param array $extraUserRoles
     * @throws PublicException
     * @author karam mustafa
     */
    public function sendNotificationToManagers($message, $extraUserRoles = [])
    {
        try {
            $extraData = [
                'users' => User::whereIn('role', array_merge($extraUserRoles, managerRoles()))->getWithOrderByDesc(),
                'title' => 'inmaa',
                'message' => $message,
            ];
            event(new PublicSendNotification($extraData));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * @param $message
     * @param null $userId
     * @throws PublicException
     * @author karam mustafa
     */
    public function sendNotificationToAuthUser($message, $userId = null)
    {
        try {
            $extraData = [
                'users' => User::where('id', $userId !== null ? $userId : Auth::user()->id)->get(),
                'title' => 'inmaa',
                'message' => $message,
            ];
            event(new PublicSendNotification($extraData));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * @param $requestType
     * @param $url
     * @param $data
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @author karam mustafa
     */
    protected function guzzlePaymentRequest($requestType, $url, $data = null)
    {
        try {
            $header = [
                "Content-Type" => "application/json",
                'Accept' => 'application/json',
                "Authorization" => "bearer " . env('PAYMENT_API_KEY')];
            $client = new Client();
            $clientRequest = $client->request("$requestType", "$url", [
                'body' => json_encode($data),
                'headers' => $header
            ]);
            return $this->getResponse(json_decode($clientRequest->getBody()));
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param $where
     * @param $message
     * @throws PublicException
     * @author karam mustafa
     */
    public function sendNotificationToManager($where = null, $message = [])
    {
        try {
            $extraData = [
                'users' => User::whereIn('role', ['maintenance_manager', 'technical_manager'])->get(),
                'title' => 'inmaa',
                'message' => $message,
            ];
            event(new PublicSendNotification($extraData));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }


    /**
     * @param $class
     * @param $line
     * @param $exception
     * @throws PublicException
     * @author karam mustafa
     */
    public static function throwException($class, $line, $exception)
    {
        $message = "Oops there is something went wrong in file " . $class . " in Line " . $line . " Details : " . $exception->getMessage();
        if ($exception instanceof PublicException
            || $exception instanceof FileException
            || $exception instanceof \Exception
            || $exception instanceof ModelNotFoundException
        ) {
            $message = $exception->getMessage();
        }
        if ($exception instanceof ModelNotFoundException) {
            $message = myTrans('resource_not_found');
        }
        throw new PublicException($message);
    }

    /**
     * @param $model
     * @param $id
     * @return Object | mixed
     * @throws PublicException
     * @author karam mustafa
     */
    public function find($model, $id)
    {
        $result = (new $model)->find($id);
        if (!isset($result)) {
            throw new PublicException(myTrans('resource_not_found'));
        }
        return $result;
    }

    /**
     * @param $appointment_id
     * @throws PublicException
     * @author karam mustafa
     */
    protected function checkAppointment($appointment_id)
    {
        $appointment = Appointment::find($appointment_id);
        if ($appointment->user_id != null) {
            throw new PublicException(myTrans('appointment_taken'));
        }
        $appointment->update(['user_id' => Auth::user()->id]);
    }

    /**
     * @param $order
     * @param $data
     * @param null $initOrder
     * @throws PublicException
     * @author karam mustafa
     */
    protected function checkIfUserCancelOrder($order = null, $data = null, $initOrder = null)
    {
        $orderToProcess = $initOrder;
        if ($initOrder == null) {
            $orderToProcess = $order->order;
        }
        if (isset($data['status'])) {
            $isCanceled = $orderToProcess->getAttributes()['status'] == 5;
            if ($isCanceled && $data['status'] !== 5 || $isCanceled && $data['status'] == 5) {
                throw new PublicException(myTrans('order_declined_by_customer'));
            }
        }else{
            if ($orderToProcess->getAttributes()['status'] == 5) {
                throw new PublicException(myTrans('order_declined_by_customer'));
            }
        }
    }

    /**
     * @param $order
     * @param $data
     * @param null $initOrder
     * @throws PublicException
     * @author karam mustafa
     */
    protected function checkIfUserCancelOrderBeforeMove($order = null, $initOrder = null)
    {
        $orderToProcess = $initOrder;
        if ($initOrder == null) {
            $orderToProcess = $order->order;
        }
        if ($orderToProcess->getAttributes()['status'] == 5) {
            throw new PublicException(myTrans('order_declined_by_customer'));
        }
    }

    protected function checkUserHasPermission(string $permission_name,string $permission_module_name):void
    {

        //create permission if it not exist
        \App\Models\role_permissions\permissions::createIfNotExist($permission_name,$permission_module_name);

        $user=Auth::user();

        if (is_null($user)){
            return;
        }

        $checkUserHasPermission = User::checkUserHasPermission($permission_name,$permission_module_name, $user->id);

        if (!$checkUserHasPermission) {
            throw new PublicException(myTrans('unauthorized_message'));
        }

    }

}
