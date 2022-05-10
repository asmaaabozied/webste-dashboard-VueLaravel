<?php

namespace App;


/**
 * Class cityInx
 * @author karam mustafa
 * @package App
 */
class cityInx extends BaseModel
{
    protected $fillable = ['name','name_ar' , 'country_inx_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function country(){
        return $this->belongsTo(countryInx::class , 'country_inx_id');
    }
}
