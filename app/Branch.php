<?php

namespace App;



/**
 * Class Branch
 * @author karam mustafa
 * @package App
 */
class Branch extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = ['name' , 'name_ar' , 'location' , 'radius'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function workshops(){
        return $this->hasMany(Workshop::class);
    }

    /**
     * @author karam mustafa
     * @var array
     */
    protected $appends = ['lat','lon'];
    /**
     * @author karam mustafa
     * @var array
     */
    protected $hidden = ['location'];

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLatAttribute(){
        $lat = json_decode($this->attributes['location'] ?? '' , true) ?? ['lat' => null];
        return $lat['lat'];
    }

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLonAttribute(){
        $lon = json_decode($this->attributes['location'] ?? '' , true) ?? ['lon' => null];
        return $lon['lon'];
    }
}
