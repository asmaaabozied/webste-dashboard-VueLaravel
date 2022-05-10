<?php

namespace App\Observers;

use App\InstallmentOrder;
use App\Notifications\AlsaadSMSService;
use App\Notifications\ShamelSMSService;

class InstallmentOrderObserver extends BaseObserver
{
    /**
     * Handle the installment order "created" event.
     *
     * @param  \App\InstallmentOrder  $installmentOrder
     * @return void
     */
    public function created(InstallmentOrder $installmentOrder)
    {
        $phoneNumber = auth()->user()->customer->phone;
        $message = "You request for installment has been received. We will contact you soon.";
        ShamelSMSService::send($phoneNumber,$message);
    }

    /**
     * Handle the installment order "updated" event.
     *
     * @param  \App\InstallmentOrder  $installmentOrder
     * @return void
     */
    public function updated(InstallmentOrder $installmentOrder)
    {
        if (isset(request()->appointment_id)) {
            $this->sendFromModel(
                ['id' => $installmentOrder->order->user_id],
                ['order', 'order_appointment_change', '', $installmentOrder->order->id, $installmentOrder->order->type]
            );
        }
    }

    /**
     * Handle the installment order "deleted" event.
     *
     * @param  \App\InstallmentOrder  $installmentOrder
     * @return void
     */
    public function deleted(InstallmentOrder $installmentOrder)
    {
        //
    }

    /**
     * Handle the installment order "restored" event.
     *
     * @param  \App\InstallmentOrder  $installmentOrder
     * @return void
     */
    public function restored(InstallmentOrder $installmentOrder)
    {
        //
    }

    /**
     * Handle the installment order "force deleted" event.
     *
     * @param  \App\InstallmentOrder  $installmentOrder
     * @return void
     */
    public function forceDeleted(InstallmentOrder $installmentOrder)
    {
        //
    }
}
