<?php

namespace App;


/**
 * Class Cart
 * @author karam mustafa
 * @package App
 */
class Cart extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'user_id' ,'is_used'
    ];

    protected $with = ['cartsProducts'];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function cartsProducts()
    {
        return $this->hasMany(CartProduct::class,'cart_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function transaction()
    {
        return $this->hasOne('App\Transaction', 'transaction_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }

}
