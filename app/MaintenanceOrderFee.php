<?php

namespace App;


/**
 * Class MaintenanceOrderFee
 * @author karam mustafa
 * @package App
 */
class MaintenanceOrderFee extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = ['Installment_order_id', 'maintenance_order_id', 'fee_id', 'amount'];

    /**
     * @return array
     * @author karam mustafa
     * @var array
     */
    public function toArray()
    {
        $data = parent::toArray();
        $data['fees'] = Fee::where('id', $this->fee_id)->get();
        return $data;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function maintenanceOrders()
    {
        return $this->hasMany(MaintenanceOrder::class, 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function fees()
    {
        return $this->hasMany(Fee::class, 'id');
    }
}
