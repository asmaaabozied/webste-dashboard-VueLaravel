<?php

namespace App\Providers;

use App\Customer;
use App\Observers\CustomerObserver;
use App\Observers\OrderReviewOrderObserver;
use App\Order;
use App\Observers\OrderObserver;
use App\OrderReviewOrder;
use App\MaintenanceOrderObserver;
use Illuminate\Support\ServiceProvider;

class ObservesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Order::observe(OrderObserver::class);
        Customer::observe(CustomerObserver::class);
        OrderReviewOrder::observe(OrderReviewOrderObserver::class);
    }
}
