<?php

namespace App;



/**
 * Class Product
 * @author karam mustafa
 * @package App
 */
class Product extends BaseModel
{

    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'name_ar',
        'description_ar',
        'image',
        'model_code',
        'quantity',
        'product_category_id',
        'price',
        'offerType',
        'offer_rateOrAmount'
        ];

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function getPriceAttribute(){
        $price =$this->attributes['price'];
        return $price;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function category()
    {
        return $this->belongsTo(ProductCategory::class,'product_category_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function cartsProducts()
    {
        return $this->hasMany(CartProduct::class,'product_id');
    }

    /**
     * @return string
     * @author karam mustafa
     */
    protected function getImageAttribute(){
        return asset('/storage/files/images/product_images/'.$this->attributes['image']);
    }
}
