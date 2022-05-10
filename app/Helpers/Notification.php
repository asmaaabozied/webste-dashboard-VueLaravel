<?php

namespace App\Helpers;

use App\Exceptions\PublicException;
use App\NotificationGroup;
use App\Notifications\PublicNotification;
use App\Singleton\OrderTypeSingleton;
use App\User;
use App\UserNotificationToken;
use GuzzleHttp\Exception\ConnectException;
use Illuminate\Support\Facades\Auth;
use LaravelFCM\Facades\FCM;
use LaravelFCM\Facades\FCMGroup;
use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use LaravelFCM\Message\Topics;


/**
 * Trait Notification
 * @author karam mustafa
 * @package App\Helpers
 */
trait Notification
{
    /**
     * @var  string
     */
    protected $notificationStatus;

    /**
     * @param $token
     * @param $topic
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function saveTopic($token, $topic)
    {
        $serverKey = env('FCM_SERVER_KEY');
        $url = "https://iid.googleapis.com/iid/v1/" . $token . "/rel/topics/" . $topic;
        try {
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_HTTPHEADER, array(
                "Authorization: key=" . $serverKey,
                "Content-Type: application/json",
                "Content-Length: 0"
            ));
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            curl_close($curl);
        } catch (Exception $e) {
            throw new PublicException($e->getMessage());
        }
        return response()->json(['message' => 'success']);
    }

    ///////////////// Normal notification //////////////////////////////

    /**
     * @param $tokenArray
     * @param array $MyData
     * @param $failSendRealTime
     * @return array
     * @throws PublicException
     * @author karam mustafa
     */
    public static function sendNormalNotification($tokenArray, $MyData = [], $failSendRealTime)
    {
        $GLOBALS['message_ar'] = transMessage('ar', ...$MyData['message']) ?? null;
        $GLOBALS['message_en'] = transMessage('en', ...$MyData['message']) ?? null;
        if ($MyData['message'][4] != "Product") {
            $GLOBALS['order_id'] = $MyData['message'][3] ?? null;
            $GLOBALS['order_type'] =  $MyData['message'][4] ?? null;
        } else {
            $GLOBALS['transaction_id'] = $MyData['message'][3] ?? null;
            $GLOBALS['order_type'] =  $MyData['message'][4] ?? null;
        }
        $responseFailAr = [];
        $responseFailEn = [];
        $responseFail = array_merge($responseFailAr, $responseFailEn);
        try {
            foreach (['ar', 'en'] as $item) {
                if (sizeof($tokenArray["tokenArray_${item}"]) > 0) {
                    $androidTokens = [];
                    $otherDeviceTokens = [];
                    foreach ($tokenArray["tokenArray_${item}"] as $token => $deviceType) {
                        if ($deviceType == 'ANDROID') {
                            array_push($androidTokens, $token);
                        } else {
                            array_push($otherDeviceTokens, $token);
                        }
                    }
                    $orderId = session()->get('orderId')[0];
                    if (sizeof($otherDeviceTokens) > 0) {
                        $notificationBuilder = new PayloadNotificationBuilder();
                        $data['order_type'] = $GLOBALS['order_type'];
                        $data['orderId'] = $orderId;
                        $notificationBuilder->setBody($GLOBALS["message_{$item}"])->setSound('default')->setClickAction($orderId);
                        $notification = $notificationBuilder->build();
                        $downstreamResponse = FCM::sendTo($otherDeviceTokens, null, $notification, null);
                        $responseFailAr = self::responseTokenError($downstreamResponse->tokensWithError());
                    }
                    if (sizeof($androidTokens) > 0) {
                        // data for android device
                        $dataBuilder = new PayloadDataBuilder();
                        $dataToBuild['message'] = $GLOBALS["message_{$item}"];
                        $dataToBuild['order_type'] = $GLOBALS['order_type'];
                        $dataToBuild['orderId'] = $orderId;
                        $dataBuilder->addData($dataToBuild);
                        $data = $dataBuilder->build();
                        $downstreamResponseForAndroid = FCM::sendTo($androidTokens, null, null, $data);
                        $responseFailAr = self::responseTokenError($downstreamResponseForAndroid->tokensWithError());
                    }
                }
            }
        } catch (ConnectException $e) {
            $errMessage = 'error in send message , error in file : TrHelper at line ' . __LINE__;
            throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
        }
        foreach ($MyData['users'] as $item) {
            //            ShamelSMSService::send($item->phone,$GLOBALS["message_$item->lang"]);
            if ($item->lang == 'ar') {
                if ($MyData['message'][4] != "Product") {
                    $item->notify(new PublicNotification($GLOBALS['message_ar'], $GLOBALS['order_id'], $GLOBALS['order_type']));
                } else {
                    $item->notify(new PublicNotification($GLOBALS['message_ar'], $GLOBALS['transaction_id'], $GLOBALS['order_type']));
                }
            } else {
                if ($MyData['message'][4] != "Product") {
                    $item->notify(new PublicNotification($GLOBALS['message_en'], $GLOBALS['order_id'], $GLOBALS['order_type']));
                } else {
                    $item->notify(new PublicNotification($GLOBALS['message_en'], $GLOBALS['transaction_id'], $GLOBALS['order_type']));
                }
            }
        }

        return $responseFail;
    }
    /**
     * @param $tokenArray
     * @param array $MyData
     * @throws PublicException
     * @throws \LaravelFCM\Message\Exceptions\InvalidOptionsException
     * @author karam mustafa
     */
    public static function sendDataNotificaion($tokenArray, $MyData = [])
    {
        $dataToBuld = $MyData;
        unset($dataToBuld['users']);

        $message_ar = transMessage('ar', ...$dataToBuld['message']);
        $message_en = transMessage('en', ...$dataToBuld['message']);
        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(1000);
        $dataBuilder = new PayloadDataBuilder();


        try {
            if (sizeof($tokenArray['tokenArray_ar']) > 0) {
                $dataToBuld['message'] = $message_ar;
                $dataBuilder->addData($dataToBuld);
                $option = $optionBuilder->build();
                $data = $dataBuilder->build();
                $downstreamResponse = FCM::sendTo($tokenArray['tokenArray_ar'], $option, null, $data);
            } elseif (sizeof($tokenArray['tokenArray_en'])) {
                $dataToBuld['message'] = $message_en;
                $dataBuilder->addData($dataToBuld);
                $option = $optionBuilder->build();
                $data = $dataBuilder->build();
                $downstreamResponse = FCM::sendTo($tokenArray['tokenArray_en'], $option, null, $data);
            }
        } catch (ConnectException $e) {
            $errMessage = 'error in send message , error in file : TrHelper at line ' . __LINE__;
            throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
        }
        if ($downstreamResponse->numberSuccess() > 0) {
            foreach ($MyData['users'] as $item) {
                $item->notify(new PublicNotification($MyData['message']));
            }
        } else {
            new PublicException('Oops there is something wrong , in file TraitHelper in line ' . __LINE__);
        }
    }
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    ///////////////////////////// Group Part /////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////
    /**
     * @param $groupName
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function createNotificationGroup($groupName, $token)
    {
        $checkFromName = NotificationGroup::where('name', $groupName)->first();
        if (!isset($checkFromName)) {
            try {
                $notification_key = FCMGroup::createGroup($groupName, $token);
                NotificationGroup::create([
                    'name' => $groupName,
                    'notification_key' => $notification_key,
                ]);
            } catch (Exception $e) {
                $errMessage = 'error in create group , error in file : TraitHelper ,  at line ' . __LINE__;
                throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
            }
        } else {
            $notification_key = FCMGroup::createGroup($groupName, $token);
            if ($checkFromName->notification_key == $notification_key)
                throw new PublicException('Oops its like group name already exists with same token');
            $checkFromName->update(['notification_key' => $notification_key]);
            return response()->json(['message' => "update notification key for group : ${groupName} success"]);
        }
        return response()->json(['message' => 'success']);
    }

    /**
     * @param $groupName
     * @param $MyData
     * @return string
     * @throws PublicException
     * @throws \LaravelFCM\Message\Exceptions\InvalidOptionsException
     * @author karam mustafa
     */
    protected function sendMessageToGroup($groupName, $MyData)
    {
        $notificationKey = NotificationGroup::where('name', $groupName)->first();
        if (!isset($notificationKey)) throw new PublicException('name of this group dose not exist');
        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(1000);

        $dataBuilder = new PayloadDataBuilder();
        $dataBuilder->addData($MyData);
        $option = $optionBuilder->build();
        $data = $dataBuilder->build();
        try {
            $groupResponse = FCM::sendToGroup($notificationKey->notification_key, $option, null, $data);
        } catch (Exception $e) {
            $errMessage = 'error in create group , error in file : TraitHelper ,  at line ' . __LINE__;
            throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
        }
        if ($groupResponse->numberSuccess() > 0) {
            $allUser = User::where('role', $groupName)->getWithOrderByDesc() ?? [];
            foreach ($allUser as $user) {
                $user->notify(new PublicNotification($MyData['message'])) ?? false;
            }
            $this->notificationStatus = "notification has been send success";
        } else {
            throw new PublicException('Oops there is something wrong , in file TraitHelper in line ' . __LINE__);
            $this->notificationStatus = "Oops there is error in when system sent notification in file TraitHelper in line " . __LINE__;
        }
        return $this->notificationStatus;
    }

    /**
     * @param $groupName
     * @param $userToken
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function AddUserToGroup($groupName, $userToken)
    {
        $notificationKey = NotificationGroup::where('name', $groupName)->first()->notification_key;
        if (!isset($notificationKey)) throw new PublicException('error in delete user from group this group dose not exist, error in file : TraitHelper ,  at line ' . __LINE__);
        try {
            $test_yasser = ['e5RWMGjESo-7RvtnODjpzT:APA91bFR3r8GjCfTwi1Fdot7qBNI4AnnBJCvloz1CYl5D-JWYIkgZ0nfw73sJ5FzFGvLsDSatXgvWhiOXQyVhNRl6YdUiJGxrIUTLEC9trGGORgWtk1ki9pLX_MmXACduhRRLmEb_edv'];
            $test_nicolas = ['f-lqszyEuE91szRDSAKgqm:APA91bH2sNkn4EqMCG7MerVpRUF-UQkAuXFtn5qPXVr48NtQsMbsOn-dI0Q4GkEzF6hNHARVHS7Dj9hIbXsgHipJ_QhySpoEvtSNH8StOAB5D1kNmu2Ofj2QDEncffg1beBfi4FiW3-o'];
            $key = FCMGroup::addToGroup($groupName, $notificationKey, $test_nicolas);
        } catch (ServerException $e) {
            $errMessage = 'error in create group , error in file : TraitHelper ,  at line ' . __LINE__;
            throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
        }
        return response()->json(['message' => 'success']);
    }

    /**
     * @param $groupName
     * @param $userToken
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function DeleteUserFromGroup($groupName, $userToken)
    {
        $notificationKey = NotificationGroup::where('name', $groupName)->first()->notification_key;
        if (!isset($notificationKey)) throw new PublicException('error in delete user from group this group dose not exist, error in file : TraitHelper ,  at line ' . __LINE__);
        try {
            $key = FCMGroup::removeFromGroup($groupName, $notificationKey, $userToken);
            //NotificationGroup::where('name' , $groupName)->first()->delete();
        } catch (ConnectException $e) {
            $errMessage = 'error in create group , error in file : TraitHelper ,  at line ' . __LINE__;
            throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
        }
        return response()->json(['message' => 'success']);
    }

    /////////////////// End Group Part //////////////////////////////////


    /////////////// Topic notification ///////////////////////////////////
    /**
     * @param $title
     * @param $message
     * @param string $OurTopic
     * @throws PublicException
     * @author karam mustafa
     */
    protected function sendTopicNormalNotification($title, $message, $OurTopic = 'inmaa'): void
    {
        $notificationBuilder = new PayloadNotificationBuilder($title);
        $notificationBuilder->setBody($message)
            ->setSound('default')
            ->setClickAction(env('APP_URL'));

        $notification = $notificationBuilder->build();

        $topic = new Topics();
        $topic->topic($OurTopic);

        try {
            $topicResponse = FCM::sendToTopic($topic, null, $notification, null);
        } catch (ConnectException $e) {
            $errMessage = 'error in send message , error in file : TrHelper at line ' . __LINE__;
            throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
        }
        if ($topicResponse->isSuccess()) {
            Auth::user()->notify(new PublicNotification($message));
        } else {
            throw new PublicException('Oops fail to send to topic , in file TraitHelper in line ' . __LINE__);
        }
    }

    /**
     * @param $MyData
     * @param array $OurTopic
     * @throws PublicException
     * @throws \LaravelFCM\Message\Exceptions\InvalidOptionsException
     * @author karam mustafa
     */
    protected function sendTopicDataNotification($MyData, $OurTopic = ['inmaa']): void
    {
        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(1000);

        $dataBuilder = new PayloadDataBuilder();
        $dataBuilder->addData($MyData);
        $option = $optionBuilder->build();
        $data = $dataBuilder->build();
        $topic = new Topics();
        $topic->topic($OurTopic);
        try {
            $topicResponse = FCM::sendToTopic($topic, null, null, $data);
        } catch (ConnectException $e) {
            $errMessage = 'error in send message , error in file : TrHelper at line ' . __LINE__;
            throw new PublicException($errMessage . ", Details :  {$e->getMessage()}");
        }
        if ($topicResponse->isSuccess()) {
            Auth::user()->notify(new PublicNotification($MyData['message']));
        } else {
            throw new PublicException('Oops fail to send to topic , in file TraitHelper in line ' . __LINE__);
        }
    }

    ///////////////// End Topic notification //////////////////////////////////////////


    /**
     * @param array $tokens
     * @return array
     * @author karam mustafa
     */
    protected static function responseTokenError(array $tokens): array
    {
        $arr = [];
        if (sizeof($tokens) > 0) {
            foreach ($tokens as $token => $errorMessage) {
                $findId = UserNotificationToken::where('fcm_token', $token)->first()->user_id;
                $user = User::find($findId)->user_name;
                $arr += [$user => [
                    'error' => $errorMessage,
                    'fcm token' => $token,
                ]];
            }
        }
        return $arr;
    }
}
