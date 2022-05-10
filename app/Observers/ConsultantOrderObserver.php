<?php

namespace App\Observers;

use App\ConsultantOrder;
use App\Notifications\ShamelSMSService;

class ConsultantOrderObserver
{
    /**
     * Handle the consultant order "created" event.
     *
     * @param \App\ConsultantOrder $consultantOrder
     * @return void
     */
    public function created(ConsultantOrder $consultantOrder)
    {
//        $phoneNumber = auth()->user()->customer->phone;
        $message = "You request for consultant has been received. We will contact you soon.";
        ShamelSMSService::send('00966593000966',$message);
        dd(ShamelSMSService::send('00966593000966',$message));
    }

    /**
     * Handle the consultant order "updated" event.
     *
     * @param \App\ConsultantOrder $consultantOrder
     * @return void
     */
    public function updated(ConsultantOrder $consultantOrder)
    {
        //
    }

    /**
     * Handle the consultant order "deleted" event.
     *
     * @param \App\ConsultantOrder $consultantOrder
     * @return void
     */
    public function deleted(ConsultantOrder $consultantOrder)
    {
        //
    }

    /**
     * Handle the consultant order "restored" event.
     *
     * @param \App\ConsultantOrder $consultantOrder
     * @return void
     */
    public function restored(ConsultantOrder $consultantOrder)
    {
        //
    }

    /**
     * Handle the consultant order "force deleted" event.
     *
     * @param \App\ConsultantOrder $consultantOrder
     * @return void
     */
    public function forceDeleted(ConsultantOrder $consultantOrder)
    {
        //
    }
}
