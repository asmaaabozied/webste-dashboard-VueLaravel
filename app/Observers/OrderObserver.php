<?php

namespace App\Observers;

use App\Order;
use App\Singleton\OrderTypeSingleton;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;

/**
 * Class OrderObserver
 * @author karam mustafa
 * @package App\Observers
 */
class OrderObserver extends BaseObserver
{
    public $role;
    public $type = [
        'installment_order' => 'installation_manager',
        'prevention_maintenance_order' => 'maintenance_manager',
        'job_application_order' => 'hr_manager',
        'consultant_order' => 'consulting_manager',
        'maintenance_order' => 'maintenance_manager',
    ];
    public $typeWithRelation = [
        'installment_order' => 'installmentOrder',
        'prevention_maintenance_order' => 'preventionMaintenanceOrder',
        'job_application_order' => 'jobApplicationOrder',
        'consultant_order' => 'consultantOrder',
        'maintenance_order' => 'maintenanceOrder',
    ];

    /**
     * @param Order $Order
     * @author karam mustafa
     */
    public function saved(Order $Order)
    {
        session()->push('orderId', $Order->id);
        if (request()->isMethod('POST')) {
            $this->sendFromModel(
                ['role' => $this->type[$Order->type]],
                ['PublicMessage', 'create_manger', str_replace('_', ' ', $Order->type), $Order->id, $Order->type]
            );
            if ($Order->type == 'job_application_order') {

                $this->sendFromModel(
                    ['id' => Auth::user()->id],
                    ['order', 'create_hr', str_replace('_', ' ', $Order->type), $Order->id, $Order->type]
                );
            } else {
                $this->sendFromModel(
                    ['id' => Auth::user()->id],
                    ['PublicMessage', 'create', str_replace('_', ' ', $Order->type), $Order->id, $Order->type]
                );
            }
        }
        if ($Order->isDirty('price')) {
            $this->sendFromModel(
                ['role' => 'technical_manager'],
                ['order', 'price_order_change_manager', $Order->price, $Order->id, $Order->type]
            );
            $this->sendFromModel(
                ['role' => $this->type[$Order->type]],
                ['order', 'price_order_change_manager', $Order->price, $Order->id, $Order->type]
            );
            $this->sendFromModel(
                ['id' => $Order->user_id],
                ['order', 'price_order_change', $Order->price, $Order->id, $Order->type]
            );
        }
    }

    /**
     * @param Order $Order
     * @author karam mustafa
     */
    public function updated(Order $Order)
    {
        session()->push('orderId', $Order->id);
        if ($Order->isDirty('payment_method')) {
            $messageString = "$Order->id to be $Order->payment_method";
            $this->sendFromModel(
                ['role' => 'technical_manager'],
                ['order', 'payment_method_order_change_manager', $messageString, $Order->id, $Order->type]
            );
            $this->sendFromModel(
                ['role' => $this->type[$Order->type]],
                ['order', 'payment_method_order_change_manager', $messageString, $Order->id, $Order->type]
            );
        }
        if ($Order->isDirty('status')) {
            if ($Order->isDirty('price')) {
                $this->sendFromModel(
                    ['id' => $Order->user_id],
                    ['order', 'price_order_change', $Order->price, $Order->id, $Order->type]
                );
                $this->sendFromModel(
                    ['role' => 'technical_manager'],
                    ['order', 'price_order_change_manager', $Order->price, $Order->id, $Order->type]
                );
            }
            if (request()->status == 1) {
                //  tell technical manager about this order
                $this->sendFromModel(['role' => 'technical_manager'], ['order', 'new_order', null, $Order->id, $Order->type]);
                $this->sendFromModel(
                    ['id' => $Order->user_id],
                    ['order', 'order_accepted', '', $Order->id, $Order->type]
                );
            } else if (request()->status == 2) {
                // technical manager will work in this order
                $this->sendFromModel(['id' => $Order->user_id], ['order', 'under_maintenance', $Order->price, $Order->id, $Order->type]);
            } elseif (request()->status == 3) {
                $this->sendFromModel(
                    ['role' => $this->type[$Order->type]],
                    ['PublicMessage', 'finish_order', str_replace('_', ' ', $Order->type) . "with number" . $Order->id, $Order->id, $Order->type]
                );
                $this->sendFromModel(
                    ['id' => $Order->user_id],
                    ['order', 'finish_order_client', str_replace('_', ' ', $Order->type) . "with number" . $Order->id, $Order->id, $Order->type]
                );
            } elseif (request()->status == 4) {
                $this->sendFromModel(
                    ['id' => $Order->user_id],
                    ['order', 'order_rejected', request()->rejected_desc ?? 'undefined rejected description', $Order->id, $Order->type]
                );
            } elseif (request()->status == 5) {
                $this->sendFromModel(
                    ['role' => 'maintenance_manager'],
                    ['order', 'order_canceled_by_client', request()->reason ?? 'undefined reason', $Order->id, $Order->type]
                );
                $this->sendFromModel(
                    ['id' => $Order->user_id],
                    ['order', 'order_canceled_by_client', request()->reason ?? 'undefined reason', $Order->id, $Order->type]
                );
            } else if ($Order->status == 0) {
                $this->sendFromModel(
                    ['role' => $this->type[$Order->type]],
                    ['order', 'order_restart', str_replace('_', ' ', $Order->type), $Order->id, $Order->type]
                );
                $this->sendFromModel(
                    ['id' => Auth::user()->id],
                    ['order', 'order_restart', str_replace('_', ' ', $Order->type), $Order->id, $Order->type]
                );
            }
        }
    }
}
