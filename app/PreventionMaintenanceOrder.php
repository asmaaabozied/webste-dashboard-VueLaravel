<?php

namespace App;


/**
 * Class PreventionMaintenanceOrder
 * @author karam mustafa
 * @package App
 */
class PreventionMaintenanceOrder extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'business_name',
        'business_phone_number',
        'business_location',
        'business_type',
        'maintenance_type',
        'order_id',
        'manufactures_id',
    ];

    /**
     * @return array
     * @author karam mustafa
     */
    public function toArray()
    {
        $data = parent::toArray();
        $array = ['lat','lon'];
        $data['manufacture'] = $this->manufactures;
        foreach ($array as $item){
            $data[$item] = json_decode($this->attributes['business_location'] , true)[$item];
        }
        unset($data['business_location']);
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

    /**
     * @return String
     * @author karam mustafa
     */
    public function getMaintenanceTypeAttribute(): String{
        $arr = ['electronic','conditioner'];
        $DeviceType = (int)($this->attributes['maintenance_type']);
        return $arr[$DeviceType] ?? 'undefined';
    }

    public  function manufactures(){
        return  $this->belongsTo(Manufacture::class , 'manufactures_id')->select('id', 'name_ar', 'name_en');;
    }
    
    
}
