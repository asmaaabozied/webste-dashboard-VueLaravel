<?php

namespace App;


class Rating extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'user_id',
        'order_id',
        'service_quality_rating',
        'employee_rating',
        'service_price_rating',
        'service_speed_rating',
        'comment'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
