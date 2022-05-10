<?php

namespace App;


/**
 * Class DiscountCode
 * @author karam mustafa
 * @package App
 */
class DiscountCode extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = ['name', 'amount', 'valid_from', 'valid_to' , 'type'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function order(){
        return $this->hasOne(Order::class);
    }

    /**
     * @return String
     * @author karam mustafa
     */
    public function getTypeAttribute(): String{
        $type = $this->attributes['type'];
        if ($type == 0) {
            return $type = 'rate';
        }elseif ($type == 1) {
            return $type = 'amount';
        }else{
            return "Undefined type value";
        }
        return $type;
    }
}
