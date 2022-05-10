<?php

namespace App\Providers;

use App\Appointment;
use App\Branch;
use App\car;
use App\ConsultantOrder;
use App\ContentManagement;
use App\Customer;
use App\DiscountCode;
use App\Employee;
use App\Fee;
use App\gallery;
use App\InstallmentOrder;
use App\JobApplicationOrder;
use App\Message;
use App\OrderReviewOrder;
use App\Policies\AppointmentPolicy;
use App\Policies\BranchPolicy;
use App\Policies\CarPolicy;
use App\Policies\ConsultantOrderPolicy;
use App\Policies\ContentManagementPolicy;
use App\Policies\CustomerPolicy;
use App\Policies\CutomerPolicy;
use App\Policies\DiscountCodePolicy;
use App\Policies\EmployeePolicy;
use App\Policies\FeePolicy;
use App\Policies\GalleryPolicy;
use App\Policies\InstallmentOrderPolicy;
use App\Policies\JobApplicationOrderPolicy;
use App\Policies\MessagePolicy;
use App\Policies\MaintenanceOrderPolicy;
use App\Policies\OrderReviewOrderPolicy;
use App\Policies\PreventionMaintenanceOrderPolicy;
use App\Policies\ProductCategoryPolicy;
use App\Policies\ProductPolicy;
use App\Policies\RatePolicy;
use App\Policies\RatingPolicy;
use App\Policies\SparePartPolicy;
use App\Policies\SuggestionPolicy;
use App\Policies\TransactionPolicy;
use App\Policies\WorkInPolicy;
use App\PreventionMaintenanceOrder;
use App\Product;
use App\ProductCategory;
use App\Rating;
use App\SparePart;
use App\Suggestion;
use App\Transaction;
use App\WorkIn;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => App\Policies\ModelPolicy,
        Customer::class => CustomerPolicy::class,
        gallery::class => galleryPolicy::class,
        Rating::class => RatePolicy::class,
        car::class => CarPolicy::class,
        Fee::class => FeePolicy::class,
        DiscountCode::class => DiscountCodePolicy::class,
        Employee::class => EmployeePolicy::class,
        WorkIn::class => WorkInPolicy::class,
        JobApplicationOrder::class => JobApplicationOrderPolicy::class,
        InstallmentOrder::class => InstallmentOrderPolicy::class,
        ConsultantOrder::class => ConsultantOrderPolicy::class,
        PreventionMaintenanceOrder::class => PreventionMaintenanceOrderPolicy::class,
        MaintenanceOrderPolicy::class => MaintenanceOrderPolicy::class,
        OrderReviewOrder::class => OrderReviewOrderPolicy::class,
        SparePart::class => SparePartPolicy::class,
        Suggestion::class => SuggestionPolicy::class,
        Message::class => MessagePolicy::class,
        Branch::class => BranchPolicy::class,
        Appointment::class => AppointmentPolicy::class,
        ContentManagement::class => ContentManagementPolicy::class,
        ProductCategory::class => ProductCategoryPolicy::class,
        Transaction::class => TransactionPolicy::class,
        Device::class => DevicePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
