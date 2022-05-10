<?php

namespace App;


/**
 * Class JobApplicationOrder
 * @author karam mustafa
 * @package App
 */
class JobApplicationOrder extends BaseModel
{
    protected $fillable = [
        'cv',
        'job_type',
        'order_id',
    ];

    /**
     * @param $val
     * @return string
     * @author karam mustafa
     */
    public function getCvAttribute($val){
        return asset("storage/files/pdf/job_app_order/".$val);
    }

    /**
     * Convert the model instance to an array.
     *
     * @return array
     */
    public function  toArray(){
        $data = parent::toArray();
        $data['order_info'] =  $this->order;
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
