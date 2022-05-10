<?php

namespace App;



class ConsultantOrder extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = ['description' , 'solve_problem', 'order_id'];

    /**
     * @return array
     * @author karam mustafa
     */
    public function toArray()
    {
        $data = parent::toArray();
        $order = $this->order;
        if ($order['status'] == 'order under maintenance') {
            $order->setAttribute('status' , 1);
        }
        $data['order_info'] = $order;
        return $data;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
