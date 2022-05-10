<?php

namespace App;


/**
 * Class car
 * @author karam mustafa
 * @package App
 */
class car extends BaseModel
{
    protected $fillable = ['car_kind', 'palette_number'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function employee()
    {
        return $this->hasOne('App\Employee', 'car_id');
    }

    /**
     * this function return parent toArray function from [Model Class]
     * and add employee info from Eloquent to response data
     * @return array
     */
    public function toArray()
    {
        $array = parent::toArray();
        $array['employee_info'] = $this->employee;
        return $array;
    }
}

