<?php

namespace App;


/**
 * Class Image
 * @author karam mustafa
 * @package App
 */
class Image extends BaseModel
{
    /**
     * @author karam mustafa
     * @var string
     */
    public $requestImageCustomPath = 'storage/files/images/image/';

    /**
     * @param $path
     * @return mixed
     * @author karam mustafa
     */
    public function getPath($path)
    {
       return  $this->requestImageCustomPath = $path;
    }

    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable  = [
        "image",
        "user_id",
        "message_id",
        "order_id",
        "maintenance_order_id",
    ];

    /**
     * @param $val
     * @return string
     * @author karam mustafa
     */
    public function getImageAttribute($val)
    {
        return asset($this->requestImageCustomPath.$this->attributes['image']);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function MaintenanceOrder(){
        return $this->belongsTo(MaintenanceOrder::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function messages(){
        return $this->hasMany(Message::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function order(){
        return $this->belongsTo(Order::class);
    }
}
