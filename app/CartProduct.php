<?php

namespace App;


/**
 * Class CartProduct
 * @author karam mustafa
 * @package App
 */
class CartProduct extends BaseModel
{
    protected $fillable = ['quantity','cart_id','product_id'];
    /**
     * @author karam mustafa
     * @var array
     */
    protected $with = ['product'];
    /**
     * @author karam mustafa
     * @var array
     */
    protected $hidden = ['product_id'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function product()
    {
        return $this->belongsTo(Product::class,'product_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function cart()
    {
        return $this->belongsTo(Cart::class,'cart_id');
    }
}
