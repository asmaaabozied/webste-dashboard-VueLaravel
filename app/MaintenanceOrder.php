<?php

namespace App;



/**
 * Class MaintenanceOrder
 * @author karam mustafa
 * @package App
 */
class MaintenanceOrder extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable  = [
        "device_type",
        "manufacture",
        "location",
        "description",
        "warranty_image",
        "warranty_type",
        "appointment_id",
        "fix_place",
        "need_spare_part",
        "has_image",
        "order_id",
        'manufactures_id',
    ];

    /**
     * @param $value
     * @return string|null
     * @author karam mustafa
     */

    public  function sparePart()
    {
        return  $this->belongsToMany(SparePart::class, 'maintenceorder_spare', 'maintenceorder_id', 'spare_id')->withTimestamps();
    }

    public function getWarrantyImageAttribute($value)
    {
        if (isset($value)) {
            return asset('storage/files/images/warranty/' . $value);
        }
        return null;
    }

    /**
     * @return array
     * @author karam mustafa
     */
    public function  toArray()
    {
        $data = parent::toArray();
        $data['order_info'] = $this->order;
        $data['images'] = $this->images;
        $data['fee_info'] = $this->maintenanceFee;
        $data['spare_part'] = $this->spareParts;
        $array = ['lat', 'lon'];
        foreach ($array as $item) {
            $data[$item] = json_decode($this->attributes['location'], true)[$item];
        }
        unset($data['location']);
        return $data;
    }

    /**
     * @return String
     * @author karam mustafa
     */
    public function getFixPlaceAttribute(): String
    {
        $fixType = [
            'client , without spare part',
            'client , with spare part',
            'in work shop',
        ];
        $FixPlace =  (int)($this->attributes['fix_place']);
        return $fixType[$FixPlace] ?? 'undefined value';
    }

    /**
     * @return String
     * @author karam mustafa
     */
    public function getDeviceTypeAttribute(): String
    {
        $DeviceType = (int)($this->attributes['device_type']);
        $devType = [
            'electronic',
            'conditioner',
        ];
        return $devType[$DeviceType] ?? 'undefined value';
    }



    /**
     * @return String
     * @author karam mustafa
     */
    public function getWarrantyTypeAttribute(): String
    {
        $WarrantyType = (int)($this->attributes['warranty_type']);
        $Type = [
            'with warranty',
            'without warranty',
        ];
        return $Type[$WarrantyType] ?? 'undefined value';
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    // spare relation many to many

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author karam mustafa
     */
    public function spareParts()
    {
        return $this->belongsToMany(
            SparePart::class,
            'order_spare_parts',
            'maintenance_order_id',
            'spare_id'
        )->withPivot('quantity');
    }
    //

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function orderSpareParts()
    {
        return $this->hasMany('App\OrderSparePart', 'order_id');
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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author karam mustafa
     */
    public  function fee()
    {
        return  $this->belongsToMany(Fee::class, 'maintenance_order_fees', 'maintenance_order_id', 'fee_id')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public  function maintenanceFee()
    {
        return  $this->hasMany(MaintenanceOrderFee::class, 'maintenance_order_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public  function appointment()
    {
        return  $this->belongsTo(Appointment::class, 'appointment_id');
    }


    public  function manufactures()
    {
        return  $this->belongsTo(Manufacture::class, 'manufacture')->select('id', 'name_ar', 'name_en');;
    }
}
