<?php

namespace App\Observers;

use App\Notifications\AlsaadSMSService;
use App\OrderReviewOrder;

class ReviewOrderObserver
{
    /**
     * Handle the order review order "created" event.
     *
     * @param  \App\OrderReviewOrder  $orderReviewOrder
     * @return void
     */
    public function created(OrderReviewOrder $orderReviewOrder)
    {
        $phoneNumber = auth()->user()->customer->phone;
        $message = "You request for review has been received. We will contact you soon.";
//        AlsaadSMSService::sendSMS($message, [$phoneNumber]);
    }

    /**
     * Handle the order review order "updated" event.
     *
     * @param  \App\OrderReviewOrder  $orderReviewOrder
     * @return void
     */
    public function updated(OrderReviewOrder $orderReviewOrder)
    {
        //
    }

    /**
     * Handle the order review order "deleted" event.
     *
     * @param  \App\OrderReviewOrder  $orderReviewOrder
     * @return void
     */
    public function deleted(OrderReviewOrder $orderReviewOrder)
    {
        //
    }

    /**
     * Handle the order review order "restored" event.
     *
     * @param  \App\OrderReviewOrder  $orderReviewOrder
     * @return void
     */
    public function restored(OrderReviewOrder $orderReviewOrder)
    {
        //
    }

    /**
     * Handle the order review order "force deleted" event.
     *
     * @param  \App\OrderReviewOrder  $orderReviewOrder
     * @return void
     */
    public function forceDeleted(OrderReviewOrder $orderReviewOrder)
    {
        //
    }
}
