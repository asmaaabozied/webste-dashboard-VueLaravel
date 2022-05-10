<?php

namespace App\Providers;

use App\ConsultantOrder;
use App\Customer;
use App\InstallmentOrder;
use App\JobApplicationOrder;
use App\MaintenanceOrder;
use App\Observers\ConsultantOrderObserver;
use App\Observers\CustomerObserver;
use App\Observers\InstallmentOrderObserver;
use App\Observers\JobApplicationOrderObserver;
use App\Observers\MaintenanceOrderObserver;
use App\Observers\ReviewOrderObserver;
use App\OrderReviewOrder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

//        ConsultantOrder::observe(ConsultantOrderObserver::class);
//        InstallmentOrder::observe(InstallmentOrderObserver::class);
//        JobApplicationOrder::observe(JobApplicationOrderObserver::class);
        MaintenanceOrder::observe(MaintenanceOrderObserver::class);
//        OrderReviewOrder::observe(ReviewOrderObserver::class);
//        Customer::observe(CustomerObserver::class);

    }
}
