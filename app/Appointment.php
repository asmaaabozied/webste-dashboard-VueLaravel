<?php

namespace App;

use Carbon\Carbon;

class Appointment extends BaseModel
{

    protected $fillable = [
        'start_time',
        'end_time',
        'date_start',
        'date_end',
        'user_id' ,
        'branch_id'
    ];

    protected $with = ['branch', 'user'];

    protected $hidden = ['branch_id', 'user_id'];

    public function getStartTimeAttribute($val): string
    {
        return Carbon::parse($val)->format('H:i');
    }

    public function getEndTimeAttribute($val): string
    {
        return Carbon::parse($val)->format('H:i');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function branch(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
