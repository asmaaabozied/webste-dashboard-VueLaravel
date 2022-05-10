<?php

namespace App;


/**
 * Class ProductCategory
 * @author karam mustafa
 * @package App
 */
class ProductCategory extends BaseModel
{

    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'name',
        'name_ar',
        'description',
        'description_ar',
        'image',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function products()
    {
        return $this->hasMany(Product::class,'product_category_id');
    }

    /**
     * @return string
     * @author karam mustafa
     */
    protected function getImageAttribute(){
        return asset('/storage/files/images/product_category/'.$this->attributes['image']);
    }

}
