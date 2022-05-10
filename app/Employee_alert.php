<?php

namespace App;


/**
 * Class Employee_alert
 * @author karam mustafa
 * @package App
 */
class Employee_alert extends BaseModel
{
    protected $fillable = [
        'emp_id', 'phone', 'nationality', 'user_id',
        'photo', 'identity_number', 'role_id',

    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
