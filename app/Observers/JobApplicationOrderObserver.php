<?php

namespace App\Observers;

use App\JobApplicationOrder;
use App\Notifications\AlsaadSMSService;
use App\Notifications\ShamelSMSService;

class JobApplicationOrderObserver
{
    /**
     * Handle the job application order "created" event.
     *
     * @param  \App\JobApplicationOrder  $jobApplicationOrder
     * @return void
     */
    public function created(JobApplicationOrder $jobApplicationOrder)
    {
        $phoneNumber = auth()->user()->customer->phone;
        $message = "You request for job has been received. We will contact you soon.";
        ShamelSMSService::send($phoneNumber,$message);
    }

    /**
     * Handle the job application order "updated" event.
     *
     * @param  \App\JobApplicationOrder  $jobApplicationOrder
     * @return void
     */
    public function updated(JobApplicationOrder $jobApplicationOrder)
    {
        //
    }

    /**
     * Handle the job application order "deleted" event.
     *
     * @param  \App\JobApplicationOrder  $jobApplicationOrder
     * @return void
     */
    public function deleted(JobApplicationOrder $jobApplicationOrder)
    {
        //
    }

    /**
     * Handle the job application order "restored" event.
     *
     * @param  \App\JobApplicationOrder  $jobApplicationOrder
     * @return void
     */
    public function restored(JobApplicationOrder $jobApplicationOrder)
    {
        //
    }

    /**
     * Handle the job application order "force deleted" event.
     *
     * @param  \App\JobApplicationOrder  $jobApplicationOrder
     * @return void
     */
    public function forceDeleted(JobApplicationOrder $jobApplicationOrder)
    {
        //
    }
}
