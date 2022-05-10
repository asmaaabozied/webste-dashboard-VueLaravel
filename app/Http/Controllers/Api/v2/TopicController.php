<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Http\Requests\TopicRequest;
use App\Http\Resources\Api\v2\TopicResource;
use App\Topic;
use Illuminate\Http\Request;
use Auth;
class TopicController extends BaseController
{
    public function __construct()
    {
        $this->tableName = 'topics';
        parent::__construct();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = TopicResource::collection(Topic::getWithOrderByDesc());
        return $this->getResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TopicRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::user()->id;
        $final = Topic::create($data);
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
        return $this->ShowCustomElement(Topic::class, $id, TopicResource::class, myTrans('resource_not_found'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TopicRequest $request, $id)
    {
        return $this->UpdateCustomElement(Topic::class, $id, $request, myTrans('resource_not_found'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $this->DeleteCustomElement(Topic::class, $id, myTrans('resource_not_found'));
    }
}
