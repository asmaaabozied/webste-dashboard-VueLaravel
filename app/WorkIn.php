<?php

namespace App;


/**
 * Class WorkIn
 * @author karam mustafa
 * @package App
 */
class WorkIn extends BaseModel
{
    protected $fillable = [
        'employee_id', 'workshop_id',

    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class,'employee_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function workshop()
    {
        return $this->belongsTo(Workshop::class,'workshop_id');
    }
}
