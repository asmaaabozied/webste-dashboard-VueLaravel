<?php

namespace App;


use Illuminate\Support\Facades\Auth;
use function Composer\Autoload\includeFile;

/**
 * Class Transaction
 * @author karam mustafa
 * @package App
 */
class Transaction extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'cart_id',
        'discount_code_id',
        'price',
        'amount',
        'payment_method',
        'delivery_method',
        'maintenance_order_id',
        'Installment_order_id',
        'user_id',
        'is_payed_transaction',
        'payed_info',
        'payment_id',
    ];

    /**
     * @param $val
     * @author karam mustafa
     */
    public function setUserIdAttribute($val)
    {
        $this->attributes['user_id'] = $val == null ?  Auth::user()->id : $val;
    }

    public function toArray()
    {
        $data = parent::toArray();
        if ($this->cart) {
            $data['cart_info'] = $this->cart;
        }
        if ($this->maintenanceOrder) {
            $data['maintenance_order_info'] = $this->maintenanceOrder;
        }elseif($this->InstallmentOrder){
            $data['maintenance_order_info'] = $this->InstallmentOrder;
        }
        $data['user_id'] = $this->user;
        $data['is_payed_transaction'] = ($this->is_payed_transaction? 1 : ($this->price == 0? 1 : 0));
        return $data;
    }

    /**
     * @return mixed|string
     * @author karam mustafa
     */
    public function getDeliveryMethodAttribute()
    {
        $DeliveryMethods = ["client", "company"];
        return $DeliveryMethods[$this->attributes['delivery_method']] ?? 'undefined delivery method';
    }

    /**
     * @return mixed|string
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function invoice()
    {
        return $this->hasOne('App\Invoice', 'transaction_id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function cart()
    {
        return $this->belongsTo(Cart::class, 'cart_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function maintenanceOrder()
    {
        return $this->belongsTo(MaintenanceOrder::class, 'maintenance_order_id');
    }

    public function InstallmentOrder()
    {
        return $this->belongsTo(InstallmentOrder::class, 'Installment_order_id');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function discount_codes()
    {
        return $this->belongsTo(DiscountCode::class, 'discount_code_id');
    }
}
