<?php

namespace App;



class ConsultantOrders extends BaseModel
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


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
