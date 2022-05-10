<?php

namespace App;



class RoleInx extends BaseModel
{
    protected $fillable = [
        'name', 'description'
        ];
    public function employees()
    {
        return $this->hasMany(Employee::class,'role_id');
    }
}
