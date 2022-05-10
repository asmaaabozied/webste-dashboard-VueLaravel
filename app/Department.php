<?php

namespace App;


/**
 * Class Department
 * @author karam mustafa
 * @package App
 */
class Department extends BaseModel
{

    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = ['name', 'description', 'image', 'name_ar', 'description_ar',];

    /**
     * @return string
     * @author karam mustafa
     */
    public function getImageAttribute()
    {
        return asset('storage/files/images/department_images/' . $this->attributes['image']);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function workshops()
    {
        return $this->hasMany('App\Workshop', 'department_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function employees()
    {
        return $this->hasMany('App\Employee', 'department_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function suggestions()
    {
        return $this->hasMany(Suggestion::class);
    }
}
