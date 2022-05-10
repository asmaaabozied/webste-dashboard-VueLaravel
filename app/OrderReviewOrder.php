<?php

namespace App;


/**
 * Class OrderReviewOrder
 * @author karam mustafa
 * @package App
 */
class OrderReviewOrder extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'description',
        'order_id',
        'status',
        "user_id"
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return array
     * @author karam mustafa
     */
    // public function  toArray(){
    //     $data = parent::toArray();
    //     // $data['order_info'] =  $this->order;
    //     // $data['type'] =  'order_review_order';
    //     return $data;
    // }


    public function toArray()
    {
        $data = parent::toArray();
        $order = $this->order;
        if ($order['status'] == 'order under maintenance') {
            $order->setAttribute('status' , 1);
        }
        $data['order_info'] = $order;
        $data['type'] =  'order_review_order';
        return $data;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function order(){
        return $this->belongsTo(Order::class );
    }

    /**
     * @return String
     * @author karam mustafa
     */
    public function getStatusAttribute(): String{
        $status = $this->attributes['status'];
        if ($status == 0){
            return $status = "received";
        }elseif ($status == 1){
            return $status = "order is being processed";
        }elseif ($status == 2){
            return $status = "order under maintenance";
        }elseif ($status == 3){
            return $status = "order finish";
        }elseif ($status == 4){
            return $status = "order declined";
        }else{
            return "Undefinded status value";
        }
        return $status;
    }
//    public function orderReviewOrder(){
//        return $this->belongsTo(OrderReviewOrder::reffere_order_id);
//    }
}
