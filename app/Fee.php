<?php

namespace App;


/**
 * Class Fee
 * @author karam mustafa
 * @package App
 */
class Fee extends BaseModel
{
    protected $fillable = ['name' , 'description' ,'name_ar','description_ar'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author karam mustafa
     */
    public function maintenanceOrder(){
        return is_null($this->belongsToMany(MaintenanceOrder::class, 'maintenance_order_fees', 'fee_id', 'maintenance_order_id')->withTimestamps())? $this->belongsToMany(MaintenanceOrder::class, 'maintenance_order_fees', 'fee_id', 'Installment_order_id')->withTimestamps() : $this->belongsToMany(MaintenanceOrder::class, 'maintenance_order_fees', 'fee_id', 'maintenance_order_id')->withTimestamps();
    }

    public function MaintenanceOrderFee(){
        return $this->hasMany(MaintenanceOrderFee::class, 'fee_id')->withTimestamps();
    }
}


