<?php

namespace App\Http\Controllers\Api\v1;

use App\Appointment;
use App\Exceptions\PublicException;
use App\Http\Controllers\Api\v2\OrderController;
use App\Http\Requests\AppointmentRequest;
use App\Http\Controllers\BaseController;
use App\Http\Requests\AppointmentUserActionRequest;
use App\Http\Resources\Api\v1\AppointmentResource;
use App\MaintenanceOrder;
use Carbon\Carbon;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;



class AppointmentController extends BaseController
{
    private $pagination = 10;
    private $permission_module_name="appointments";
    function __construct()
    {
        $this->tableName = 'appointments';
        parent::__construct();
    }

    public function index(Request $request)
    {
        try {
            $this->page = ($request->page - 1) * 10;
            if (isset($request->pagination)) {
                $this->pagination = $request->pagination;
            }

            $Appointment = Appointment::whereDate('date_end', '>=', Carbon::now())
                ->whereDate('date_start', '>=', Carbon::now())
                ->where('user_id', null)->getWithOrderByDesc();

            return $this->getResponse(array_values(AppointmentResource::collection($Appointment)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function store(AppointmentRequest $request)
    {
        try {
            $this->checkUserHasPermission("store",$this->permission_module_name);
            $data = $request->validated();
            $startTime = Carbon::parse($data['start_time']);
            $endTime = Carbon::parse($data['end_time']);
            $diffTimes = $startTime->diffInHours($endTime);
            $startDate = Carbon::parse($data['date_start']);
            $endDate = Carbon::parse($data['date_end']);
            $diffDays = $startDate->diffInDays($endDate);
            $dataToSave = [];
            $i = 0;
            $j = 0;
            while ($i <= $diffDays) {
                while ($j <= $diffTimes) {
                    $startDate = Carbon::parse($data['date_start']);
                    $startTime = Carbon::parse($data['start_time']);
                    $dataToSave["date_{$i}_{$j}"] = [
                        'start_time' => $startTime->addHours($j)->toTimeString(),
                        'end_time' => $startTime->addHours($data['duration'])->toTimeString(),
                        'date_start' => $startDate->addDays($i)->toDateString(),
                        'date_end' => $endDate->toDateString(),
                        'branch_id' => $data['branch_id'],
                    ];
                    $j += $data['duration'];
                }
                $j = 0;
                $i += 1;
            }
            Appointment::insert(collect($dataToSave)->values()->toArray());
            return $this->getResponse(myTrans('add_success'), 200);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            //            return $this->getResponse($this->getWithFilter(DB::table('appointments')->getWithOrderByDesc(),'id', $id));
            return $this->ShowCustomElement(Appointment::class, $id, AppointmentResource::class);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function update(AppointmentRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $model = Appointment::findOrFail($id);
            $data = $request->validated();
            $model->update($data);
            return $this->getResponse($model, myTrans('update_success'), true);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            $model = Appointment::findOrFail($id);
            $model = $model->load('user');
            if (isset($model->user)) {
                $request = request()->all();
                if (isset($request->confirmation) && $request->confirmation !== true) {
                    throw new PublicException(myTrans('appointment_taken_by_user'));
                }
            }
            $model->delete();
            return $this->getResponse(null, myTrans('delete_success'), 200);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function reserveDate(AppointmentUserActionRequest $request, $id)
    {
        try {
            $model = Appointment::find($id);
            if (!isset($model)) {
                throw new PublicException('recourse in not found');
            }
            if ($model->user_id != null) {
                throw new PublicException(myTrans('appointment_not_available'));
            }
            $model->update(['user_id' => (int)$request->user_id]);
            return $this->getResponse($model, myTrans('appointment_reserved_successfully'), false);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function getByBranch(Request $request ,$branchId)
    {
        try {
            $model = Appointment::where(['branch_id' =>  $branchId, 'user_id' => null])
                ->whereDate('date_end', '>=', Carbon::now())
                ->whereDate('date_start', '<=', Carbon::now())
                ->getWithOrderByDesc();

            if (!isset($model)) {
                throw new PublicException(myTrans('resource_not_found'));
            }

            $this->page = ($request->page - 1) * 10;
            if (isset($request->pagination)) {
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(AppointmentResource::collection($model)->forPage($request->page, $this->pagination)->toArray()));

            return $this->getResponse($model);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function cancelAppointment(AppointmentUserActionRequest $request, $id)
    {
        try {
            $model = Appointment::find($id);
            if (!isset($model)) throw new PublicException(myTrans('resource_not_found'));
            if ($model->user_id == null) {
                throw new PublicException(myTrans('appointment_not_reserved'));
            }
            // this mean the order status now 5 and this is client cancel case
            OrderController::changeOrderStatus(
                MaintenanceOrder::where('appointment_id', $model->id)->first()->order,
                5
            );
            $this->checkUserHasPermission("cancel",$this->permission_module_name);
            $model->update(['user_id' => null]);
            return $this->getResponse($model, myTrans('appointment_canceled_successfully'), false);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }
}
