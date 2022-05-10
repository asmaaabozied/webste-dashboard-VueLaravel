<?php

namespace App\Http\Controllers\Api\v2;

use App\Http\Controllers\BaseController;
use App\Rating;

class getServicesTypeController extends BaseController
{
    public function __construct()
    {
        $this->useConstrcut = false;
        parent::__construct();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @throws \App\Exceptions\PublicException
     */
    public function index()
    {
        try {
            $rate = Rating::with('order')->getWithOrderByDesc();
            $arr = [
                "maintenance_order" => 0,
                "prevention_maintenance_order" => 0,
                "consultant_order" => 0,
                "job_application_order" => 0,
                "installment_order" => 0,
                "order_review_order" => 0,
            ];
            $div = [
                "maintenance_order" => 0,
                "prevention_maintenance_order" => 0,
                "consultant_order" => 0,
                "job_application_order" => 0,
                "installment_order" => 0,
                "order_review_order" => 0,
            ];
            /*
            * ex : customer rate : 5,5,5,5
            * the count will be 20
            * system divide to 4 -> 5
            *
            * customer rate again : 1,1,1,1
            * the count will be 4
            * system divide to 4 -> 1
            *
            * the count will be (5 + 1) / (2 || this count of this order of this type) -> result 3
            * */

            foreach ($rate as $index => $item) {
                foreach ($arr as $index => $item2) {
                    if ($index == $item->order->type) {
                        $num = 0;
                        $num += $item->service_quality_rating;
                        $num += $item->employee_rating;
                        $num += $item->service_price_rating;
                        $num += $item->service_speed_rating;
                        $num = $num / 4;
                        $arr[$item->order->type] += $num;
                    }
                }
            }
            $collect = Rating::with('order')->get();
            $orders = collect($collect);
            foreach($orders as $order){
                $div[$order->order->type] += 1;
            }
            foreach ($arr as $index => $item) {
                if ($div[$index] != 0) {
                    $arr[$index] = round($item / $div[$index], 2);
                }
            }
            return $this->getResponse($arr);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }
}
