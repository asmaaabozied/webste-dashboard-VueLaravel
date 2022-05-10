<?php

namespace App;


/**
 * Class Advertisement
 * @author karam mustafa
 * @package App
 */
class Advertisement extends BaseModel
{
    protected $fillable = [
        'start_date',
        'end_date',
        'image',
        'main_title',
        'sub_title',
        'description',
        'main_title_ar',
        'sub_title_ar',
        'description_ar',
        'price',
        'isEnabled',
    ];

    /**
     * @param $key
     * @return false|float
     * @author karam mustafa
     */
    public function getPriceAttribute($key)
    {
        return round($key , 2);
    }

    /**
     * @return string
     * @author karam mustafa
     */
    public function getImageAttribute()
    {
        return asset('storage/files/images/advert_area/'.$this->attributes['image']);
    }
}
