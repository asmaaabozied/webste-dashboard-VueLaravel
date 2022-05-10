<?php

namespace App\Http\Controllers\Api\v2;

use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\PreventionMaintenanceOrderRequest;
use App\Http\Resources\Api\v2\PreventionMaintenanceOrderResource;
use App\Http\Resources\Collection\Api\v2\PreventionMaintenanceOrderCollection;
use App\PreventionMaintenanceOrder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\userHasRole;


class PreventionMaintenanceOrderController extends BaseController
{
    private $permission_module_name="prevention maintenance";
    public function __construct()
    {
        $this->tableName = 'prevention_maintenance_orders';
        parent::__construct();
    }

    public function index()
    {
        if (userHasRole(Auth::user(), ['customer']))
        {
            return $this->getByRole(['user_id' => Auth::user()->id]);
        }

        if (userHasRole(Auth::user(),array_merge(mainManagerRoles(), ['maintenance_manager']))) {
            return $this->getByRole(['type' => 'prevention_maintenance_order']);
        }

        return $this->getAllData(PreventionMaintenanceOrderCollection::class, PreventionMaintenanceOrder::class);
    }

    public function store(PreventionMaintenanceOrderRequest $request)
    {
        try {
            $final = DB::transaction(function () use ($request) {
                $this->checkUserHasPermission("store",$this->permission_module_name);
                $data = $request->validated();
                $data['business_location'] = $this->getLocation($data);
                $data['order_id'] = $this->saveOrder('prevention_maintenance_order')->id;
                return PreventionMaintenanceOrder::create($data);
            });
            return $this->getResponse(PreventionMaintenanceOrder::find($final->id), myTrans('add_success'), 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function show($id)
    {
        $this->checkUserHasPermission("show",$this->permission_module_name);
        return $this->ShowCustomElement(PreventionMaintenanceOrder::class, $id, PreventionMaintenanceOrderResource::class, myTrans('resource_not_found'));
    }

    public function update(PreventionMaintenanceOrderRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->permission_module_name);
            $data = $request->validated();
            if (isset($data['lat']) && isset($data['lon'])) {
                $data['business_location'] = $this->getLocation($data);
            }
            $PreventionMaintenanceOrder = PreventionMaintenanceOrder::findOrFail($id);
            $this->checkIfUserCancelOrder($PreventionMaintenanceOrder, $data);

            $PreventionMaintenanceOrder->update($data);
            $PreventionMaintenanceOrder->order->update($data);
            return $this->getResponse($PreventionMaintenanceOrder, myTrans('update_success'), false, 200);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    public function destroy($id)
    {
        $this->checkUserHasPermission("destroy",$this->permission_module_name);
        return $this->DeleteCustomElementFromRelation(PreventionMaintenanceOrder::class, $id, 'order', myTrans('resource_not_found'));
    }

    private function getByRole($whereCloser)
    {
        $data = new PreventionMaintenanceOrderCollection(PreventionMaintenanceOrder::
        whereHas('order', function ($q) use ($whereCloser) {
            return $q->where($whereCloser);
        })
            ->orderBy('created_at', 'desc')->paginate($this->limit));
        return $this->getResponse($data);
    }

    protected function getLocation(array $data)
    {

        try {
            if (!isset($data['business_location'])) {
                return json_encode([
                    "lat" => round($data['lat'], 2) ?? 'decoding_lat is missed',
                    "lon" => round($data['lon'], 2) ?? 'decoding_lat is missed',
                ]);
            } else {
                throw new PublicException(myTrans('correct_location_required'));
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }
}
