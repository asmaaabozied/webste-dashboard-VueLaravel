<?php

namespace App;


/**
 * Class Employee
 * @author karam mustafa
 * @package App
 */
class Employee extends BaseModel
{

    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'name', 'phone', 'nationality', 'id',
        'image', 'id_number','car_id', 'department_id','manger_id'
    ];

    /**
     * @return string
     * @author karam mustafa
     */
    public function getImageAttribute()
    {
        return asset('storage/files/images/employee_images/'.$this->attributes['image']);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function workIns(){
        return $this->hasMany('App\WorkIn','employee_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function employeeAlert(){
        return $this->hasMany('App\Employee_alert','emp_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class,'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function car()
    {
        return $this->belongsTo(car::class,'car_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function role()
    {
        return $this->belongsTo(RoleInx::class,'role_id');
    }
    // add order relation

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author karam mustafa
     */
    public  function orders(){
        return  $this->belongsToMany(Order::class , 'order_employees' , 'employee_id' , 'order_id')->withTimestamps();
    }
}
