<?php

namespace App\Observers;

use App\MaintenanceOrder;
use App\Notifications\AlsaadSMSService;
use App\Notifications\ShamelSMSService;

class MaintenanceOrderObserver extends BaseObserver
{
    /**
     * Handle the maintenance order "created" event.
     *
     * @param  \App\MaintenanceOrder  $maintenanceOrder
     * @return void
     */
    public function created(MaintenanceOrder $maintenanceOrder)
    {
//        $phoneNumber = auth()->user()->customer->phone;
//        $message = "You request for maintenence has been received. We will contact you soon.";
//        ShamelSMSService::send($phoneNumber,$message);
    }

    /**
     * Handle the maintenance order "updated" event.
     *
     * @param  \App\MaintenanceOrder  $maintenanceOrder
     * @return void
     */
    public function updating(MaintenanceOrder $maintenanceOrder)
    {
        if ($maintenanceOrder->isDirty('warranty_type')){
            $warrantyType = $maintenanceOrder->getAttributes()['warranty_type'];
            if ($warrantyType == 1){
                $this->sendFromModel(
                    ['role' => 'maintenance_manager'] ,
                    ['maintenance_order' , 'without_warranty' , $maintenanceOrder->id]
                );
                $this->sendFromModel(
                    ['id' => $maintenanceOrder->order->user_id] ,
                    ['maintenance_order' , 'without_warranty' , $maintenanceOrder->id]
                );
            }
        }

        if (isset(request()->appointment_id)) {
            $this->sendFromModel(
                ['id' => $maintenanceOrder->order->user_id],
                ['order', 'order_appointment_change', '', $maintenanceOrder->order->id, $maintenanceOrder->order->type]
            );
        }

        if (isset(request()->appointment_id)) {
            $this->sendFromModel(
                ['id' => $maintenanceOrder->order->user_id],
                ['order', 'order_appointment_change', '', $maintenanceOrder->order->id, $maintenanceOrder->order->type]
            );
        }
    }

    /**
     * Handle the maintenance order "deleted" event.
     *
     * @param  \App\MaintenanceOrder  $maintenanceOrder
     * @return void
     */
    public function deleted(MaintenanceOrder $maintenanceOrder)
    {
        //
    }

    /**
     * Handle the maintenance order "restored" event.
     *
     * @param  \App\MaintenanceOrder  $maintenanceOrder
     * @return void
     */
    public function restored(MaintenanceOrder $maintenanceOrder)
    {
        //
    }

    /**
     * Handle the maintenance order "force deleted" event.
     *
     * @param  \App\MaintenanceOrder  $maintenanceOrder
     * @return void
     */
    public function forceDeleted(MaintenanceOrder $maintenanceOrder)
    {
        //
    }
}
