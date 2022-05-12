<?php

namespace App;


class MaintenceorderSpare extends BaseModel
{

    protected $table="maintenceorder_spare",

    protected $fillable = [
        'maintenceorder_id',
        'spare_id'
       ,
    ];



}
