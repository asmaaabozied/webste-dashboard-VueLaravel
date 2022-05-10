<?php

namespace App;



class OrderEmployee extends BaseModel
{
    public function employee()
    {
        return $this->belongsTo(Employee::class,'employee_id');
    }
    public function order()
    {
        return $this->belongsTo(Order::class,'order_id');
    }

}
