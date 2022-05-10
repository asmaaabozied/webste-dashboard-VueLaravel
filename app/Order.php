<?php

namespace App;


use App\Events\PublicSendNotification;
use App\Exceptions\PublicException;
use Illuminate\Support\Facades\DB;
use App\InstallmentOrder;

/**
 * Class Order
 * @author karam mustafa
 * @package App
 */
class Order extends BaseModel
{
    /**
     * @author karam mustafa
     * @var array
     */
    protected $fillable = [
        'status',
        'price',
        'payment_method',
        'employee_id',
        'user_id',
        'is_finished',
        'discount_code_id',
        'rejected_desc',
        'reason',
        'technical_status',
        'technical_reason',
        'type',
    ];
    /**
     * @author karam mustafa
     * @var array
     */
    public  $orderStatus = [
        'received',
        'order is being processed',
        'order under maintenance',
        'order finish',
        'order declined',
        'order declined by client',
        'order finish with unfixed device',
        'order review',
    ];
    /**
     * @author karam mustafa
     * @var array
     */
    public  $orderTechnicalStatus = [
        'failed',
        'success'
    ];
    /**
     * @author karam mustafa
     * @var array
     */
    public $orderPaymentMethod = [
        'cach',
        'online',
        // 'bank transfer',
    ];

    /**
     * @return mixed|string
     * @author karam mustafa
     */
    public function getTypeAttribute()
    {
        if (!isset($this->attributes['type']) || $this->attributes['type'] == null) return $this->attributes['type'] = 'initial order';
        return $this->attributes['type'];
    }

    /**
     * @return array
     * @author karam mustafa
     */
    public function toArray()
    {
        $data = parent::toArray();
        $data['employee_info'] = $this->employees;
        $data['user_info'] = $this->user;
        $data['rating'] = $this->rating;
        return $data;
    }

    /**
     * @return float|int|mixed
     * @throws PublicException
     * @author karam mustafa
     */

    public function getPrice2()
    {
        $price = $this->attributes['price'];
        $discount_code_id = $this->attributes['discount_code_id'];
        // check if discount for this order is not null which that mean we will deduct them amount
        if ($discount_code_id != null | $discount_code_id != '') {
            $discount = DiscountCode::find($discount_code_id);
            // if type of this discount from discount table is rate we will do this equation
            // ex : price is 100 and discount is 10 and type is rate >>> (100 - (100*(10/100)))
            if ($discount->type == 'rate') {
                return ($price - ($price * ($discount->amount / 100)));
            }
            // else deducts this amount direct
            elseif ($discount->type == 'amount') {
                return ($price - $discount->amount);
            }
            // otherwise mean this has error in discount table
            else {
                throw new PublicException('please make sure you are insert true discount type (rate or amount)');
            }
        }
        $maintenanceOrder = DB::table('maintenance_orders')
            ->join('maintenance_order_fees', 'maintenance_orders.id', '=', 'maintenance_order_fees.maintenance_order_id')
            ->where('order_id', $this->id)
            ->get();
        $maintenanceOrderSpare = DB::table('maintenance_orders')
            ->join('order_spare_parts', 'maintenance_orders.id', '=', 'order_spare_parts.maintenance_order_id')
            ->where('order_id', $this->id)
            ->get();
        $spareParts = DB::table('spare_parts')->get();
        $sparePartsCollect = collect($spareParts);
        if (isset($maintenanceOrder) && sizeof($maintenanceOrder) > 0) {
            foreach ($maintenanceOrder as $item) {
                $price += abs($item->amount) ?? 0;
            }
        }

        if (isset($maintenanceOrderSpare) && sizeof($maintenanceOrderSpare) > 0 && $this->maintenanceOrder->warranty_type != "with warranty") {
            foreach ($maintenanceOrderSpare as $item) {
                $sparePrice = $sparePartsCollect->where('id', $item->spare_id)->first();
                $price += abs($sparePrice->price * $item->quantity) ?? 0;
            }
        }
        return $price;
    }

    public function getPriceAttribute()
    {
        $price = $this->attributes['price'];
        $discount_code_id = $this->attributes['discount_code_id'];
        // check if discount for this order is not null which that mean we will deduct them amount
        if ($discount_code_id != null | $discount_code_id != '') {
            $discount = DiscountCode::find($discount_code_id);
            // if type of this discount from discount table is rate we will do this equation
            // ex : price is 100 and discount is 10 and type is rate >>> (100 - (100*(10/100)))
            if ($discount->type == 'rate') {
                return ($price - ($price * ($discount->amount / 100)));
            }
            // else deducts this amount direct
            elseif ($discount->type == 'amount') {
                return ($price - $discount->amount);
            }
            // otherwise mean this has error in discount table
            else {
                throw new PublicException('please make sure you are insert true discount type (rate or amount)');
            }
        }
        $maintenanceOrder = DB::table('maintenance_orders')
            ->join('maintenance_order_fees', 'maintenance_orders.id', '=', 'maintenance_order_fees.maintenance_order_id')
            ->where('order_id', $this->id)
            ->get();

        $maintenanceOrderSpare = DB::table('maintenance_orders')
            ->join('order_spare_parts', 'maintenance_orders.id', '=', 'order_spare_parts.maintenance_order_id')
            ->where('order_id', $this->id)
            ->get();
        $spareParts = DB::table('spare_parts')->get();
        $sparePartsCollect = collect($spareParts);
        if (isset($maintenanceOrder) && sizeof($maintenanceOrder) > 0) {
            foreach ($maintenanceOrder as $item) {
                $price += abs($item->amount) ?? 0;
            }
        }

        if (isset($maintenanceOrderSpare) && sizeof($maintenanceOrderSpare) > 0) {
            foreach ($maintenanceOrderSpare as $item) {
                $sparePrice = $sparePartsCollect->where('id', $item->spare_id)->first();
                $price += abs($sparePrice->price * $item->quantity) ?? 0;
            }
        }


        if($this->type == "installment_order"){
            $maintenanceOrder = DB::table('installment_orders')
            ->join('maintenance_order_fees', 'installment_orders.id', '=', 'maintenance_order_fees.Installment_order_id')
            ->where('order_id', $this->id)
            ->get();

            if (isset($maintenanceOrder) && sizeof($maintenanceOrder) > 0) {
                foreach ($maintenanceOrder as $item) {
                    $price += abs($item->amount) ?? 0;
                }
            }
            return $price;
        }else{
            return $price;
        }
    }

    /**
     * @return String
     * @author karam mustafa
     */
    public function getStatusAttribute(): String
    {
        $status = $this->attributes['status'];
        return $this->orderStatus[$status] ?? 'undefined value';
    }
    /**
     * @return String
     * @author karam mustafa
     */
    public function getTechnicalStatusAttribute(): String
    {
        $status = $this->attributes['technical_status'];
        return $this->orderTechnicalStatus[$status] ?? 'the technical status not insert yet';
    }

    /**
     * @return mixed|string
     * @author karam mustafa
     */
    public function getPaymentMethodAttribute()
    {
        $paymentMethod = $this->attributes['payment_method'];
        return $this->orderPaymentMethod[$paymentMethod] ?? 'undefined value';
    }

    /**
     * @param array $where
     * @param array $message
     * @author karam mustafa
     */
    private function  sendFromModel(array  $where, array $message)
    {
        $extraData = [
            'users' => User::where($where)->getWithOrderByDesc(),
            'title' => 'inmaa',
            'message' => $message,
        ];
        event(new PublicSendNotification($extraData));
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function OrderReviewOrder()
    {
        return $this->belongsTo(OrderReviewOrder::class, 'id', 'order_id');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function consultantOrder()
    {
        return $this->hasOne(ConsultantOrder::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function jobApplicationOrder()
    {
        return $this->hasOne(JobApplicationOrder::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function preventionMaintenanceOrder()
    {
        return $this->hasOne(PreventionMaintenanceOrder::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function installmentOrder()
    {
        return $this->hasOne(InstallmentOrder::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function maintenanceOrder()
    {
        return $this->hasOne(MaintenanceOrder::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author karam mustafa
     */
    public  function employees()
    {

        return  $this->belongsToMany(Employee::class, 'order_employees', 'order_id', 'employee_id')->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author karam mustafa
     */
    public function orderE()
    {
        return $this->hasMany(OrderEmployee::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author karam mustafa
     */
    public function DiscountCode()
    {
        return $this->belongsTo(DiscountCode::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author karam mustafa
     */
    public function rating()
    {
        return $this->hasOne(Rating::class);
    }
}
