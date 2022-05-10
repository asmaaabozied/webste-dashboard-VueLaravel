<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkScheduleRequest;
use App\Http\Resources\WorkScheduleResource;
use App\WorkSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

/**
 * Class WorkScheduleController
 * @author karam mustafa
 * @package App\Http\Controllers
 */
class WorkScheduleController extends BaseController
{
    /**
     * WorkScheduleController constructor.
     * @throws \App\Exceptions\PublicException
     * @author karam mustafa
     */
    public function __construct()
    {
        $this->useConstrcut = false;
        parent::__construct();
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function getWorkDays()
    {

        try {
            $workDays = WorkSchedule::all();
            return $this->getResponse(WorkScheduleResource::collection($workDays), "Work days retrieved", null, 200);
        } catch (\Exception $e) {
            return $this->getResponse(null, "Something went wrong with the server", $e->getMessage(), 500);
        }
    }

    /**
     * @param WorkScheduleRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @author karam mustafa
     */
    public function updateWorkTime(WorkScheduleRequest $request)
    {
        $request->validated();
        $input = $request->input();
        if (Carbon::parse($request->from)->greaterThan(Carbon::parse($request->to))) {
            return $this->getResponse(null, 'Invalid start and end time values', null, 400);
        }
        try {
            $workDay = WorkSchedule::find($request->id);
            $workDay->update($input);
            return $this->getResponse(null, 'Work time updated successfully', null, 200);
        } catch (\Exception $e) {
            return $this->getResponse(null, 'Something went wrong updating work time', $e->getMessage(), 500);
        }
    }
}
