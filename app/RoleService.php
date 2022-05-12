<?php

namespace App;


/**
 * Class ProductCategory
 * @author karam mustafa
 * @package App
 */
class RoleService extends BaseModel
{

    protected $table="role_service",
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'role_id',
        'service_id'
       ,
    ];



}
