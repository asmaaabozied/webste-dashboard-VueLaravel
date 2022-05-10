<?php


namespace App\Http\Controllers;


use App\Exceptions\PublicException;
use App\Http\Requests\CheckPaymentRequest;
use App\Http\Requests\DirectPaymentRequest;
use App\Http\Requests\ExecutePaymentRequest;
use App\Http\Requests\InitiatePaymentRequest;
use App\Transaction;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use function App\Helpers\myTrans;

/**
 * Class PaymentController
 * @author karam mustafa
 * @package App\Http\Controllers
 */
class PaymentController extends BaseController
{
    /**
     * @param InitiatePaymentRequest $request
     * @return ResponseFactory|Response
     * @throws PublicException
     * @throws GuzzleException
     * @author karam mustafa
     */
    public function initiatePayment(InitiatePaymentRequest $request)
    {
        try {
            // return $request->all();
            $token = env('PAYMENT_API_KEY');
            $basURL = env('PAYMENT_URL');
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "$basURL/v2/InitiatePayment",
                CURLOPT_CUSTOMREQUEST => "POST",
                CURLOPT_POSTFIELDS => json_encode($request->all()),
                CURLOPT_HTTPHEADER => array("Authorization: Bearer $token", "Content-Type: application/json"),
            ));
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

            $response = curl_exec($curl);
            $err = curl_error($curl);
            curl_close($curl);

            if ($err) {
                throw new PublicException($err);
            } else {
                return $this->getResponse(json_decode($response));
            }

            // return $this->guzzlePaymentRequest(
            //     'POST',
            //     env('PAYMENT_URL') . "/v2/InitiatePayment",
            //     $request->all()
            // );
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param ExecutePaymentRequest $request
     * @return ResponseFactory|Response
     * @throws PublicException
     * @throws GuzzleException
     * @author karam mustafa
     */
    public function executePayment(ExecutePaymentRequest $request)
    {
        try {
            $data = $request->all();
            // if (!isset($data['CallBackUrl'])) {
            //     $data['CallBackUrl'] = $data['ErrorUrl'] = env('APP_URL') . "/payment/PaymentVerification?transaction_id={$data['transaction_id']}";
            // }

            // $curl = curl_init();
            // $basURL = env('APP_URL');
            // $token = env('PAYMENT_API_KEY');
            // curl_setopt_array($curl, array(
            //     CURLOPT_URL => "$basURL/v2/ExecutePayment",
            //     CURLOPT_CUSTOMREQUEST => "POST",
            //     CURLOPT_POSTFIELDS => json_encode($data),
            //     CURLOPT_HTTPHEADER => array("Authorization: Bearer $token", "Content-Type: application/json"),
            // ));
            // curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

            // $response = curl_exec($curl);
            // $err = curl_error($curl);

            // curl_close($curl);

            // if ($err) {
            //     throw new PublicException($err);
            // } else {
            //     return $this->getResponse(json_decode($response));
            // }

          
            return $this->guzzlePaymentRequest(
                'POST',
                env('PAYMENT_URL') . "/v2/ExecutePayment",
                $data
            );
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param CheckPaymentRequest $request
     * @return ResponseFactory|Response
     * @throws GuzzleException
     * @throws PublicException
     *
     * @author karam mustafa
     */
    public function checkPayment(CheckPaymentRequest $request)
    {
        try {
            $requestData = $request->all();
            $data = ['KeyType' => 'paymentId', 'Key' => $requestData['paymentId']];
            $transToUpdate = Transaction::find($requestData['transaction_id']);
            if (!isset($transToUpdate)) throw new PublicException('this transaction dose not exists');
            if ($transToUpdate->user_id != Auth::user()->id) {
                throw new PublicException(myTrans('transaction_not_match_user'));
            }
            $trans = Transaction::where('payment_id', $data['Key'])->first();
            if ($trans) throw new PublicException(myTrans('payment_exists'));

            $result = $this->guzzlePaymentRequest('POST', env('PAYMENT_URL') . "/v2/getPaymentStatus", $data);
            $resultData = json_decode($result->getContent())->data;
            $invoiceStatus = $this->findInvoiceStatus($resultData);
            if ($resultData->IsSuccess && $invoiceStatus->TransactionStatus !== 'Failed') {
                $transToUpdate->update([
                    'is_payed_transaction' => true,
                    "amount" => ($transToUpdate->amount + abs($resultData->Data->InvoiceValue)),
                    "payment_id" => $data['Key'],
                    "payed_info" => $result->getContent(),
                ]);
                $this->sendNotificationToAuthUser(['payment', 'success_payment']);
                $this->sendNotificationToManager(null, [
                    'payment', 'success_payment_for_manager', Auth::user()->user_name
                ]);
            } else {
                if ($invoiceStatus->TransactionStatus == 'Failed') {
                    throw new PublicException($invoiceStatus->Error);
                }
            }
            return $this->getResponse($result);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param DirectPaymentRequest $request
     * @return ResponseFactory|Response
     * @throws GuzzleException
     * @throws PublicException
     * @author karam mustafa
     * @deprecated true
     */
    public function directPayment(DirectPaymentRequest $request)
    {
        try {
            $data = $request->all();
            parse_str(parse_url($data['PaymentURL'])['query'], $params);
            $invoiceKey = $params['invoiceKey'];
            parse_str(parse_url($data['PaymentURL'])['query'], $params);
            $paymentGatewayId = $params['paymentGatewayId'];
            $data['card'] = json_encode($data['card']);
            unset($data['PaymentURL']);
            $result = $this->guzzlePaymentRequest(
                'GET',
                "https://demo.myfatoorah.com/En/PayInvoice/Checkout?invoiceKey=0106233404635&paymentGatewayId=22"
            );

            $resultData = json_decode($result->getContent())->data;
            return $this->getResponse($resultData);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @param Request $request
     * @return ResponseFactory|Response
     * @throws GuzzleException
     * @throws PublicException
     * @author karam mustafa
     * @uses not yet
     */
    public function extractPaymentId(Request $request)
    {
        try {
            $data = $request->all();
            if (!isset($data['payment_url'])) throw new PublicException(myTrans('payment_url_required'));
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $data['payment_url']);
            curl_setopt($ch, CURLOPT_HEADER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $a = curl_exec($ch);
            $url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
            parse_str(parse_url($url)['query'], $params);
            $paymentId = $params['paymentId'];
            return $this->getResponse(['payment_id' => $paymentId]);
        } catch (\Exception $e) {
            throw new PublicException($e->getMessage());
        }
    }

    /**
     * @return ResponseFactory|Response|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @author karam mustafa
     */
    public function sendForMobileApp()
    {
        preg_match("/iPhone|Android|iPad|iPod|webOS/", $_SERVER['HTTP_USER_AGENT'], $matches);
        $os = current($matches);
        $json = file_get_contents(base_path('.well-known/apple-app-site-association'));
        if (in_array($os, ['iPad', 'iPod', 'iPhone'])) {
            return response($json, 200)
                ->header('content-type', 'application/json');
        }
        return redirect('/');
    }

    /**
     * @param $resultData
     * @return
     * @throws PublicException
     * @author karam mustafa
     */
    private function findInvoiceStatus($resultData)
    {
        if (isset($resultData->Data->InvoiceTransactions[0])) {
            return $resultData->Data->InvoiceTransactions[0];
        }
        throw new PublicException(myTrans('payment_error'));
    }
}
