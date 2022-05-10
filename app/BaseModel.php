<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

/**
 * Class BaseModel
 * @author karam mustafa
 * @package App
 */
class BaseModel extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    /**
     * @param $query
     * @return mixed
     * @author karam mustafa
     */
    public function scopeGetWithOrderByDesc($query)
    {
        return $query->orderBy('updated_at', 'desc')->get();
    }
}
