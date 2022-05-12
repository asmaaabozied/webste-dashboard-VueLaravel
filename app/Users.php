<?php

namespace App;




class Users extends BaseModel
{

protected $table="users";
    protected $guarded = [

    ];

    public function customer()
    {
        return $this->hasOne(Customer::class,'user_id');
    }
}
