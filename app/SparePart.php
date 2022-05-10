<?php

namespace App;



/**
 * Class SparePart
 * @author karam mustafa
 * @package App
 */
class SparePart extends BaseModel
{

    protected $fillable = ['name', 'manufacturer','price','code' , 'name_ar'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */

    public function toArray()
    {
        $arrayData = parent::toArray();
        $arrayData['manufacturer'] = $this->manufactures;
        return $arrayData;
    }

    public function orderSpareParts(){
        return $this->hasMany('App\OrderSparePart','spar_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author karam mustafa
     */
    public function maintenanceOrders()
    {
       return  $this->belongsToMany(MaintenanceOrder::class , 'order_spare_parts'  , 'maintenance_order_id' , 'spare_id')->withPivot('quantity');
    }


    public  function manufactures(){
        return  $this->belongsTo(Manufacture::class , 'manufacturer')->select('id', 'name_ar', 'name_en');;
    }
}
