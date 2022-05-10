<?php

namespace App;


/**
 * Class Invoice
 * @author karam mustafa
 * @package App
 */
class Invoice extends BaseModel
{
    protected $fillable = [

        'transaction_id', 'date'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function transaction()
    {
        return $this->belongsTo(Transaction::class,'transaction_id');
    }

}
