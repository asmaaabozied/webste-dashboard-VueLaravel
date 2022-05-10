<?php

namespace App;


class DeliveryOrder extends BaseModel
{
    protected $fillable = [
        'delivery_date',
        'location',
        'price',
        'transaction_id',
    ];
    protected $appends = ['lat','lon'];

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLatAttribute(){
        return json_decode($this->attributes['location'] , true)['lat'];
    }

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLonAttribute(){
        return json_decode($this->attributes['location'] , true)['lon'];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function transaction()
    {
        return $this->belongsTo(Transaction::class,'transaction_id');
    }
}
