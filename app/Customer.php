<?php

namespace App;
/**
 * Class Customer
 * @author karam mustafa
 * @package App
 */
class Customer extends BaseModel
{ 

    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = ['name', 'phone', 'location', 'user_id'];
    /**
     * @author karam mustafa
     * @var array
     */
    protected $appends = ['lat','lon'];

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLatAttribute(){
        return json_decode($this->attributes['location'] , true)['lat'];
    }

    /**
     * @return mixed
     * @author karam mustafa
     */
    protected function  getLonAttribute(){
        return json_decode($this->attributes['location'] , true)['lon'];
    }

    /**
     * @return array
     * @author karam mustafa
     */
    public function toArray()
    {
        $data = parent::toArray();
        unset($data['location']);
        return $data;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function customerAlerts()
    {
        return $this->hasMany(CustomerAlert::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function confirmationKey()
    {
        return $this->hasOne(ConfirmationKey::class);
    }

}


