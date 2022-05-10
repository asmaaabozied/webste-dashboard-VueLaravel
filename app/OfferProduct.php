<?php

namespace App;



class OfferProduct extends BaseModel
{
    protected $fillable = ['quantity','offer_id','product_id'];

    public function product()
    {
        return $this->belongsTo(Product::class,'product_id');
    }
    public function offer()
    {
        return $this->belongsTo(Offer::class,'offer_id');
    }
}
