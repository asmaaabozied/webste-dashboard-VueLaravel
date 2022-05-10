<?php

namespace App\Http\Controllers\Api\v1;
use App\Advertisement;
use App\Exceptions\PublicException;
use App\Http\Controllers\BaseController;
use App\Http\Requests\AdvertisementRequest;
use App\Http\Requests\AdvertisementEditRequest;
use Illuminate\Http\Request;
use App\Http\Resources\Api\v1\AdvertisementResource;
use function App\Helpers\myTrans;


class AdvertisementController extends BaseController
{
    private   $pagination             = 10;
    protected $imagePath              = "files/images/advert_area";
    private   $permission_module_name = "ads";

    function __construct()
    {
        $this->tableName = 'advertisements';
        parent::__construct();
    }

    public function index(Request $request)
    {

        try{
            $this->checkUserHasPermission("show",$this->permission_module_name);
			$this->page = ($request->page-1)*10;
            $Advertisement = Advertisement::all();
            if(isset($request->pagination)){
                $this->pagination = $request->pagination;
            }
            return $this->getResponse(array_values(AdvertisementResource::collection($Advertisement)->forPage($request->page, $this->pagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

        // return $this->getAllData(AdvertisementCollection::class , Advertisement::class);
    }

    public function store(AdvertisementRequest $request)
    {
        try {
        $this->checkUserHasPermission("store",$this->permission_module_name);
        $input = $request->all();
        $input['image'] = $this->SaveFile($request->image, 'image', null, $this->imagePath);
            $data =  Advertisement::create($input);
        }catch (\Exception $e){
            throw new PublicException($e->getMessage());
        }
        return $this->getResponse($data, myTrans('add_success'), false , 200);
    }

    public function show($id)
    {
        try{
            $this->checkUserHasPermission("show specific",$this->permission_module_name);
            return $this->ShowCustomElement(Advertisement::class, $id, AdvertisementResource::class, myTrans('resource_not_found'));

        } catch (\Exception $exception) {
            throw new PublicException($exception->getMessage());
        }
    }


    public function update(AdvertisementEditRequest $request, $id)
    {
        try {
           $this->checkUserHasPermission("update",$this->permission_module_name);
            $input = $request->all();
            if(isset($input['image'])){
                $input['image'] =  $this->SaveFile($request->image, 'image', null, $this->imagePath);
            }
            Advertisement::findOrFail($id)->update($input);
            $final = Advertisement::findOrFail($id);
        }catch (\Exception $e){
            throw new PublicException($e->getMessage());
        }
        return $this->getResponse($final, myTrans('update_success'), false , 200);
    }

    public function destroy($id)
    {
        try {
            $this->checkUserHasPermission("destroy",$this->permission_module_name);
            return $this->DeleteCustomElement(Advertisement::class, $id, myTrans('resource_not_found'));
        }catch (\Exception $e){
            throw new PublicException($e->getMessage());
        }
    }
}
