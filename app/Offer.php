<?php

namespace App;



class Offer extends BaseModel
{
    protected $fillable = [
        'discount_rate', 'description','offer_price',
        ];

    public function offersProducts()
    {
        return $this->hasMany(OfferProduct ::class,'offer_id');
    }
}
