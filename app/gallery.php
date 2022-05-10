<?php

namespace App;

use Illuminate\Support\Facades\DB;

/**
 * Class gallery
 * @author karam mustafa
 * @package App
 */
class gallery extends BaseModel
{
    protected $fillable = ['name', 'phone', 'location', 'isConfirmed', 'user_id'];

    /**
     * Convert the model instance to an array.
     *
     * @return array
     */
    public function toArray()
    {
        $data = parent::toArray();
        $data['lat'] = json_decode($this->attributes['location'] , true)['lat'];
        $data['user_id'] = $this->user_id;
        $data['user_info'] = DB::table('users')->find($this->user_id);
        $data['lon'] = json_decode($this->attributes['location'] , true)['lon'];
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
}
