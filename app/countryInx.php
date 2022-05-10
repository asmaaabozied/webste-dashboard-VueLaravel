<?php

namespace App;



class countryInx extends BaseModel
{
    protected $fillable = ['name' , 'name_ar'];

    public function countries()
    {
        return $this->hasMany(cityInx::class);
    }
}
