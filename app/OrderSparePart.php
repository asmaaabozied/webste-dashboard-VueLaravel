<?php

namespace App;



class OrderSparePart extends BaseModel
{
    protected $fillable = [
        'quantity', 'spare_id', 'maintenance_order_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function sparePart()
    {
        return $this->belongsTo(SparePart::class,'spare_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function order()
    {
        return $this->belongsTo(MaintenanceOrder::class,'order_id');
    }
}
