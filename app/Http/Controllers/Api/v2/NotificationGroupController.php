<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Http\Requests\NotificationGroupRequest;
use App\Http\Resources\Api\v2\NotificationGroupResource;
use App\NotificationGroup;

/**
 * Class NotificationGroupController
 * @author karam mustafa
 * @package App\Http\Controllers\Api\v2
 */
class NotificationGroupController extends BaseController
{
    public function __construct()
    {
        $this->tableName = 'ratings';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = NotificationGroupRecource::collection(NotificationGroup::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NotificationGroupRequest $request)
    {
        $final = NotificationGroup::create($request->validated());
        return $this->getResponse($final, myTrans('add_success'), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->ShowCustomElement(NotificationGroup::class, $id, NotificationGroupResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(NotificationGroupRequest $request, $id)
    {
        return $this->UpdateCustomElement(NotificationGroup::class, $id, $request, myTrans('resource_not_found'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     * @throws \App\Exceptions\PublicException
     */
    public function destroy($id)
    {
        return $this->DeleteCustomElement(NotificationGroup::class, $id, myTrans('resource_not_found'));
    }
}
