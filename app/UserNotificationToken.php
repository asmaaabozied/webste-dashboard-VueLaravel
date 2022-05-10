<?php

namespace App;



/**
 * Class UserNotificationToken
 * @author karam mustafa
 * @package App
 */
class UserNotificationToken extends BaseModel
{
    protected $fillable = ['fcm_token' , 'user_id' , 'device_type'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
