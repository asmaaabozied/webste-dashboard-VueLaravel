<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\JobApplicationOrderRequest;
use App\Http\Resources\Api\v2\JobApplicationOrderResource;
use App\Http\Resources\Collection\Api\v2\JobApplicationOrderCollection;
use App\JobApplicationOrder;
use Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;
use function foo\func;


class JobApplicationOrderController extends BaseController
{
    private $permission_module_name = "job application";

    public function __construct()
    {
        $this->tableName = 'job_application_orders';
        parent::__construct();
    }

    public function index()
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        if (userHasRole(Auth::user(),['customer'])) {
            return $this->getByRole(['user_id' => Auth::user()->id]);
        }
        if (userHasRole(Auth::user(),array_merge(mainManagerRoles(), ['hr_manager']))) {

            return $this->getByRole(['type' => 'job_application_order']);
        }
        return $this->getAllData(JobApplicationOrderCollection::class, JobApplicationOrder::class);
    }

    public function store(JobApplicationOrderRequest $request)
    {
        try {
            $final = DB::transaction(function () use ($request) {
                $this->checkUserHasPermission("store",$this->permission_module_name);
                $data = $request->validated();
                $data['cv'] = $this->SaveCv($request);
                $data['order_id'] = $this->saveOrder('job_application_order')->id;
                return JobApplicationOrder::create($data);
            });
            return $this->getResponse($final, myTrans('job_order_sessesfuly'), false, 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show specific",$this->permission_module_name);

        return $this->ShowCustomElement(JobApplicationOrder::class, $id, JobApplicationOrderResource::class, myTrans('resource_not_found'));
    }

    public function update(JobApplicationOrderRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $data = $request->validated();
            $JobApplicationOrder = JobApplicationOrder::findOrFail($id);
            if (isset($request['cv'])) {
                $data['cv'] = $this->SaveCv($request);
            }
            $this->checkIfUserCancelOrder($JobApplicationOrder, $data);
            $JobApplicationOrder->update($data);
            $JobApplicationOrder->order->update($data);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
        return $this->getResponse($JobApplicationOrder, myTrans('update_success'), false, 200);
    }

    public function getCvFile($id)
    {
        $this->checkUserHasPermission("get Cv File",$this->permission_module_name);

        try {
            $JobApplicationOrder = JobApplicationOrder::findOrFail($id);
            $filename = $JobApplicationOrder->getAttributes()['cv'];
            $path = storage_path("app/public/files/pdf/job_app_order/" . $filename);
            $header = ['Content-Type: application/pdf'];
            return Response::download($path, $filename, $header);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy",$this->permission_module_name);

        return $this->DeleteCustomElementFromRelation(JobApplicationOrder::class, $id, 'order', myTrans('resource_not_found'));
    }

    public function SaveCv($request)
    {
        $file = $request['cv'];

        if ($file->getClientOriginalExtension() != 'pdf') {
            throw new PublicException('cv file must be pdf type');
        }
        if (request()->hasFile('cv')) {
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            try {
                $file->move(storage_path('app/public/files/pdf/job_app_order/'), $fileName);
            } catch (\Exception $e) {
                self::throwException(__CLASS__, __LINE__, $e);
            }
        } else {
            throw new PublicException(myTrans('file_type_filed'));
        }
        return $fileName;
    }

    private function getByRole($whereCloser)
    {
        $data = new JobApplicationOrderCollection(JobApplicationOrder::
        whereHas('order', function ($q) use ($whereCloser) {
            return $q->where($whereCloser);
        })
            ->orderBy('created_at', 'desc')->paginate($this->limit));
        return $this->getResponse($data);
    }
}
