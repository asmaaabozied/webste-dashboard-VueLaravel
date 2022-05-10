<?php

namespace App\Observers;

use App\ConfirmationKey;
use App\Customer;
use App\Exceptions\PublicException;
use function App\Helpers\sendConfirmationKey;

/**
 * Class CustomerObserver
 * @author karam mustafa
 * @package App\Observers
 */
class CustomerObserver
{
    /**
     * Handle the customer "created" event.
     *
     * @param \App\Customer $customer
     * @return void
     * @throws PublicException
     */
    public function created(Customer $customer)
    {
        $phone = $customer->phone;
//        $checkIfPhoneIsExists = Customer::where('id', '!=', $customer->id)->where('phone', $phone)->first();
//        if (isset($checkIfPhoneIsExists) || !is_null($checkIfPhoneIsExists)) {
//            throw new PublicException(myTrans('phone_number_already_exists'));
//        }
        try {
            $confirmationKey = sendConfirmationKey($phone);
            $confirmationModel = new ConfirmationKey();
            $confirmationModel->customer_id = $customer->id;
            $confirmationModel->confirmation_key = $confirmationKey;
            $confirmationModel->save();
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * Handle the customer "updated" event.
     *
     * @param \App\Customer $customer
     * @return void
     */
    public function updated(Customer $customer)
    {
//        $phone = $customer->phone;
//        $checkIfPhoneIsExists = Customer::where('id' , '!=' , $customer->id)->where('phone' , $phone)->first();
//        if (isset($checkIfPhoneIsExists) || !is_null($checkIfPhoneIsExists)){
//            throw new PublicException(
//                "phone number is already exists"
//            );
//        }
//        try {
////            $confirmationKey = sendConfirmationKey($phone);
//            $confirmationKey = '123';
//            $confirmationModel = new ConfirmationKey();
//            $confirmationModel->customer_id = $customer->id;
//            $confirmationModel->confirmation_key = $confirmationKey;
//            $confirmationModel->save();
//        }catch (\Exception $e){
//            throw new PublicException(
//                "Oops there is something went wrong in file ".__FILE__. "in Line ". __LINE__ . " Details : ". $e->getMessage()
//            );
//        }
    }

    /**
     * Handle the customer "deleted" event.
     *
     * @param \App\Customer $customer
     * @return void
     */
    public function deleted(Customer $customer)
    {
        //
    }

    /**
     * Handle the customer "restored" event.
     *
     * @param \App\Customer $customer
     * @return void
     */
    public function restored(Customer $customer)
    {
        //
    }

    /**
     * Handle the customer "force deleted" event.
     *
     * @param \App\Customer $customer
     * @return void
     */
    public function forceDeleted(Customer $customer)
    {
        //
    }
}
