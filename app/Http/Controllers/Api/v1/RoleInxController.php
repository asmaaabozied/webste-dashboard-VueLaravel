<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\RoleInx;
use App\Http\Resources\Api\v1\RoleInxResource;
use App\Http\Controllers\BaseController;
use App\Http\Requests\RoleRequest;
use App\Http\Requests\RoleEditRequest;

/**
 * Class RoleInxController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v1
 */
class RoleInxController extends BaseController
{
    /**
     * RoleInxController constructor.
     * @throws \App\Exceptions\PublicException
     */
    function __construct()
    {
        $this->tableName = 'role_inxes';
        parent::__construct();
    }

    /**
     * @author karam mustafa
     * @var int
     */
    public $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {
      $data =   RoleInx::create($request->validated());
        return $this->getResponse($data, myTrans('add_success'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->ShowCustomElement(RoleInx::class, $id, RoleInxResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleEditRequest $request, $id)
    {
        return $this->UpdateCustomElement(RoleInx::class, $id, $request, myTrans('resource_not_found'));
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function index()
    {
        $data = RoleInxResource::collection(RoleInx::getWithOrderByDesc());
        return $this->getResponse($data);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->DeleteCustomElement(RoleInx::class, $id, myTrans('resource_not_found'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function createNewRoleInx(Request $request)
    {
        //$user = Auth::user();
        $validator = Validator::make($request->all(), [
            'name' => 'required |unique:role_inxes',
            'description' => 'required',
        ]);
        if (!$validator->fails()) {
            $roleInx = new RoleInx;
            $roleInx->name = $request->input('name');
            $roleInx->description = $request->input('description');


            if ($roleInx->save()) {

                return response()->json(['success' => 'success'], $this->successStatus);
            } else {
                return response()->json(['errors' => 'can not save in the data base'], 400);
            }
        } else {
            return response(['errors' => $validator->errors('name')], 422);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function editRoleInx(Request $request)
    {
        // $user = Auth::user();
        $validator = Validator::make($request->all(), [
            'roleInx_id' => 'required|exists:role_inxes,id',
        ]);

        if (!$validator->fails()) {
            $roleInx = RoleInx::where('id', '=', $request->input('roleInx_id'))->first();
            $input = $request->all();
            $roleInx->update($input);
            $roleInx->save();
            return response()->json(['success' => "the role_inx has been edited"], $this->successStatus);
        } else {
            return response(['errors' => $validator->errors('roleInx_id')], 422);
        }
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     * @author karam mustafa
     */
    public function getRolesInx()
    {
        return  RoleInxResource::collection(RoleInx::getWithOrderByDesc());
    }

    /**
     * @param $id
     * @return RoleInxResource
     * @author karam mustafa
     */
    public function getRoleInx($id)
    {
        return new RoleInxResource(RoleInx::find($id));
    }
}
