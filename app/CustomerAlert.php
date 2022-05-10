<?php

namespace App;


/**
 * Class CustomerAlert
 * @author karam mustafa
 * @package App
 */
class CustomerAlert extends BaseModel
{
    protected $fillable = [
        'date_time',
        'text',
        'customer_id',
    ];
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
