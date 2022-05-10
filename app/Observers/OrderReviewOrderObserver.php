<?php

namespace App\Observers;

use App\OrderReviewOrder;
use Illuminate\Support\Facades\Auth;

class OrderReviewOrderObserver extends BaseObserver
{
//    public function saved(OrderReviewOrder $Order){
//        $this->sendFromModel(
//            ['id' =>  Auth::user()->id] ,
//            ['order' , 'create_order_review_order']
//        );
//        $this->sendFromModel(
//            ['role' =>  'maintenance_manager'] ,
//            ['order' , 'new_order' , 'order review']
//        );
//    }
//    public function updated(OrderReviewOrder $Order){
//        if ($Order->isDirty('status')){
//                if(request()->status == 1){
//                    //  tell maintenance manager about this order
//                    $this->sendFromModel(['role' => 'maintenance_manager'] , ['order' , 'new_order']);
//                } else if (request()->status == 2){
//                    // maintenance manager will work in this order
//                    $this->sendFromModel(['id' => $Order->user_id] , ['order' , 'under_maintenance']);
//                }
//                elseif (request()->status == 3){
//                    $this->sendFromModel(
//                        ['role' => $this->role] ,
//                        ['PublicMessage' , 'finish_order' , str_replace('_' , ' ' ,$Order->type)."with number".$Order->id]
//                    );
//                    $this->sendFromModel(
//                        ['id' => $Order->user_id] ,
//                        ['order' , 'finish_order_client' , str_replace('_' , ' ' ,$Order->type)]
//                    );
//                }
//                elseif (request()->status == 4){
//                    $this->sendFromModel(
//                        ['id' => $Order->user_id] ,
//                        ['order' , 'order_rejected' , request()->rejected_desc]
//                    );
//                }
//            }
//    }
}
