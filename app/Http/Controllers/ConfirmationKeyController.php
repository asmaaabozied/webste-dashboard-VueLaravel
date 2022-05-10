<?php

namespace App\Http\Controllers;

use App\ConfirmationKey;
use App\Customer;
use App\Exceptions\PublicException;
use App\Http\Requests\ConfirmationKeyRequest;
use App\Http\Requests\ReSendConfirmationKeyRequest;
use App\Notifications\ShamelSMSService;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function App\Helpers\myTrans;
use function App\Helpers\sendConfirmationKey;

class ConfirmationKeyController extends BaseController
{
    /**
     * ConfirmationKeyController constructor.
     * @throws PublicException
     * @author karam mustafa
     */
    public function __construct()
    {
        $this->useConstrcut = false;
        parent::__construct();
    }

    /**
     * @param ConfirmationKeyRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @author karam mustafa
     */
    public function checkCustomerCode(ConfirmationKeyRequest $request)
    {
        try {
            $data = $request->validated();
            $customer = User::where('user_name', $request->user_name)->first();
            if (isset($customer->gallery)) {
                if ($customer->gallery->isConfirmed) {
                    throw new PublicException(myTrans('gallery_account_is_registered_and_confirmed'));
                } else {
                    throw new PublicException(myTrans('gallery_account_is_registered'));
                }
            }
            if (isset($customer)) {
                $customerId = $customer->customer->id;
            } else {
                throw new PublicException('this customer dose not exists');
            }
            $getConfKey = ConfirmationKey::where(
                ['customer_id' => $customerId, 'confirmation_key' => $data['confirmation_key']]
            )->first();
            if (isset($getConfKey) && !is_null($getConfKey)) {
                $customer = Customer::findOrFail($customerId);
                if ($customer->user->is_verified == 1) {
                    throw new PublicException(myTrans('customer_checked_before'));
                }
                $customer->user->is_verified = 1;
                $customer->user->save([$customer]);
                $customer->confirmationKey->delete();
                return $this->getResponse(myTrans('verify_success'));
            } else {
                throw new PublicException(myTrans('confirmation_key_not_correct'));
            }
        } catch (\Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            throw new PublicException(
                "Oops there is something went wrong in file " . __FILE__ . "in Line " . __LINE__ . " Details : " . $e->getMessage()
            );
        }
    }

    /**
     * @param ReSendConfirmationKeyRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @author karam mustafa
     */
    public function reSendCustomerConfirmCode(ReSendConfirmationKeyRequest $request)
    {
        try {
            $customer = User::where('user_name', $request->user_name)->first();
            if (isset($customer->gallery)) {
                if ($customer->gallery->isConfirmed) {
                    throw new PublicException(myTrans('gallery_account_is_registered_and_confirmed'));
                } else {
                    throw new PublicException(myTrans('gallery_account_is_registered'));
                }
            }
            if (isset($customer) && isset($customer->customer)) {
                $customerId = $customer->customer->id;
            } else {
                throw new PublicException(myTrans('customer_not_exists'));
            }
            ConfirmationKey::where(
                ['customer_id' => $customerId]
            )->delete();
            $customer = Customer::findOrFail($customerId);

            if ($customer->user->is_verified == 1) {
                throw new PublicException(myTrans('customer_checked_before'));
            }
            $confirmationKey = sendConfirmationKey($customer->phone);
            $confirmationModel = new ConfirmationKey();
            $confirmationModel->customer_id = $customer->id;
            $confirmationModel->confirmation_key = $confirmationKey;
            $confirmationModel->save();
            return $this->getResponse(myTrans('resend_code_success'));
        } catch (\Exception $e) {
            if ($e instanceof PublicException) {
                throw new PublicException($e->getMessage());
            }
            throw new PublicException(
                "Oops there is something went wrong in file " . __FILE__ . "in Line " . __LINE__ . " Details : " . $e->getMessage()
            );
        }
    }
}
