<?php

namespace App\Http\Controllers\Api\v1;

use App\Branch;
use App\Exceptions\PublicException;
use App\Http\Requests\BranchRequest;
use App\Http\Requests\NearestLocationRequest;
use App\Http\Resources\Api\v1\BranchResource;
use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use KMLaravel\GeographicalCalculator\Facade\GeographicalCalculatorFacade;

class BranchController extends BaseController
{

    private $pagination             = 10;
    private $module_permission_name = "branches";

    function __construct()
    {
        $this->tableName = 'offers';
        parent::__construct();
    }

    public function index(Request $request)
    {
        try{

            $this->checkUserHasPermission("show All",$this->module_permission_name);

			$this->page = ($request->page-1)*10;
            $Branch = Branch::all();
            if(isset($request->pagination)){
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(BranchResource::collection($Branch)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }

    public function store(BranchRequest $request)
    {
        try {

            $this->checkUserHasPermission("store",$this->module_permission_name);
            $data = $request->validated();
            $data['location'] = json_encode([
                "lat" => $data['lat'],
                "lon" => $data['lon'],
            ]);
            $result = Branch::create($data);
            return $this->getResponse($result, myTrans('add_success'), 200);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }

    }

    public function show($id)
    {
        try {
             $this->checkUserHasPermission("show specific",$this->module_permission_name);
            return $this->ShowCustomElement(Branch::class, $id, BranchResource::class, myTrans('resource_not_found'));
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }

    }

    public function update(BranchRequest $request, $id)
    {
        try {
            $this->checkUserHasPermission("update",$this->module_permission_name);
            $model = Branch::findOrFail($id);
            $data = $request->validated();
            $data['location'] = json_encode([
                "lat" => $data['lat'] ?? $model->lat,
                "lon" => $data['lon'] ?? $model->lon,
            ]);
            $model->update($data);
            return $this->getResponse($model, myTrans('update_success'), true);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $this->checkUserHasPermission("destroy",$this->module_permission_name);
            $model = Branch::findOrFail($id);
            if (sizeof($model->getRelations()) > 0) {
                throw new PublicException('the branch contains workshops , please make sure to delete all related workshops and try again');
            }
            $model->delete();
            return $this->getResponse(null, myTrans('delete_success'), 200);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }

    public function nearestLocation(NearestLocationRequest $request)
    {
        try {
             $this->checkUserHasPermission("nearest Location",$this->module_permission_name);
            $requestData = $request->validated();
            $result = [];
            $branches = Branch::getWithOrderByDesc();
            foreach ($branches as $branch) {
                $location = json_decode($branch->location);
                $lengthValues = GeographicalCalculatorFacade::initCoordinates(
                    $requestData['lat'], $location->lat, $requestData['lon'], $location->lon,
                    ['units' => ['km']]
                )->getDistance();
                foreach ($lengthValues as $value) {
                    if ($value <= $branch->radius) {
                        $result[] = $branch;
                    }
                }
            }
            return $this->getResponse($result);
        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }
}
