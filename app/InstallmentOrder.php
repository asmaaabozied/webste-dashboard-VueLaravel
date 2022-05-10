<?php

namespace App;


class InstallmentOrder extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'name', 'phone', 'location', 'device_type', 'manufacturer', 'order_id', 'appointment_id', 'type', 'item'
    ];

    public  $orderType = [
        'reassemble and assemble',
        'Installation',
        'Established'
    ];

    public function getTypeAttribute(): String
    {
        $type = $this->attributes['type'];
        return $this->orderType[$type] ?? 'reassemble and assemble';
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public  function appointment()
    {
        return  $this->belongsTo(Appointment::class, 'appointment_id');
    }
    /**
     * @return array
     * @author karam mustafa
     */
    public function toArray()
    {
        $arrayData = parent::toArray();
        $arrayData['appointment'] = collect($this->appointment)->except('user');
        $arrayData['order_info'] = $this->order;
        $arrayData['manufacture'] = $this->manufactures;
        $arrayData['item'] = json_decode($this->attributes['item'], true) ?? null;
        $array = ['decoding_lat', 'decoding_lon', 'installation_lat', 'installation_lon'];
        foreach ($array as $item) {
            $arrayData[$item] = json_decode($this->attributes['location'], true)[$item];
        }
        unset($arrayData['location']);
        return $arrayData;
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
    public function getDeviceTypeAttribute(): String
    {
        $DeviceType = (int)($this->attributes['device_type']);
        $types = [
            0 => 'electronic',
            1 => 'conditioner',
        ];
        if (isset($types[$DeviceType])) {
            $DeviceType = $types[$DeviceType];
        } else {
            return "Undefinded device type value";
        }
        return $DeviceType;
    }

    public  function manufactures()
    {
        return  $this->belongsTo(Manufacture::class, 'manufacturer')->select('id', 'name_ar', 'name_en');;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author karam mustafa
     */
    public  function fee()
    {
        return  $this->belongsToMany(Fee::class, 'maintenance_order_fees', 'Installment_order_id', 'fee_id')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public  function maintenanceFee()
    {
        return  $this->hasMany(MaintenanceOrderFee::class, 'Installment_order_id');
    }
}
