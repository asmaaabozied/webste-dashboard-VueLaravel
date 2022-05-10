<?php

namespace App\Http\Controllers;

use App\Exceptions\PublicException;
use App\Http\Resources\Api\v2\AllUserNotificationResource;
use App\User;
use App\UserNotificationToken;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use LaravelFCM\Facades\FCMGetter;
use function App\Helpers\myTrans;

/**
 * Class FCMController
 * @author karam mustafa
 * @package App\Http\Controllers
 */
class FCMController extends BaseController
{
    /**
     * FCMController constructor.
     * @throws PublicException
     */
	private $notipagination = 10;
	private $page = 1;
    public function __construct()
    {
        // here we stop parent construct from work
        $this->useConstrcut = false;
        parent::__construct();
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function index(Request $request)
    {
        try{
			$this->page = ($request->page-1)*10;
            $user = Auth::user();
            if (is_null($user))
                throw new PublicException(myTrans('user_not_found'));
            if (!isset($request->fcm_token))
                throw new PublicException('fcm token is required');
            $user_notification = UserNotificationToken::where('user_id', $user->id)->where('fcm_token', $request->fcm_token)->first();
            $deviceType = $this->getDeviceTypeByToken($request->fcm_token);

            if (is_null($user_notification)) {
                UserNotificationToken::create([
                    'user_id' => $user->id,
                    'fcm_token' => $request->fcm_token,
                    'device_type' => $deviceType,
                ]);
            } else {
                return $this->getResponse(null, 'token already exist');
            }
            return $this->getResponse(null, 'send token success');
        }catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /**
     * @param array $extraData
     * @return array
     * @throws PublicException
     * @author karam mustafa
     */
    public function sendMessage(array $extraData = [])
    {
        try{

            $tokenArray = ['tokenArray_ar' => [], 'tokenArray_en' => []];
            foreach ($extraData['users'] as $item) {
                foreach ($item->UserNotificationToken as $itemToken) {
                    $tokenArray["tokenArray_" . $item->lang][$itemToken->fcm_token] = $itemToken->device_type;
                }
            }
            if (sizeof($tokenArray['tokenArray_ar']) > 0 || sizeof($tokenArray['tokenArray_en']) > 0) {
                $normal = $this->sendNormalNotification($tokenArray, $extraData, true);
            } else {
                $this->sendNormalNotification($tokenArray, $extraData, true);
                return [
                    'error while send notification' => "notification saved , but not send because there is no user token to send for it ,  please check from users first"
                ];
            }
            return $normal;
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }

    }
    /////////////////// user Action //////////////////////

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     * @author karam mustafa
     */
    protected function getUserNotification(Request $request)
    {
        try{
			$this->page = ($request->page-1)*10;
            $user = Auth::user()->notifications;
            return $this->getResponse(array_values(AllUserNotificationResource::collection($user)->forPage($request->page, $this->notipagination)->toArray()));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     */
    protected function LastNotification()
    {
        try{
            return $this->getResponse(AllUserNotificationResource::collection(Auth::user()->unreadNotifications));

        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     * @throws PublicException
     */
    protected function MakeAllAsRead()
    {
        try{
            Auth::user()->unreadNotifications->markAsRead();
            return $this->getResponse(AllUserNotificationResource::collection(Auth::user()->notifications));
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }
    /////////////////// end user Action /////////////////
    ///
    // this function which front end send request to save topic
    /**
     * @param Request $request
     * @param $topic
     * @throws PublicException
     * @author karam mustafa
     */
    protected function saveUserTopic(Request $request, $topic)
    {
        try{
            $token = $request->token;
            $this->saveTopic($token, $topic);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /////////////// Start Group Part /////////////////////

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @throws \Illuminate\Validation\ValidationException
     * @author karam mustafa
     */
    protected function createNotificationGroupMethod(Request $request)
    {
        try{
            $this->validate($request, ['groupName' => 'required']);
            $groupName = $request->groupName;
            $token = User::where('id', Auth::user()->id)->pluck('fcm_token')->toArray();
            return $this->createNotificationGroup($groupName, $token);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function AddUserToGroupMethod(Request $request)
    {
        try{
            $groupName = $request->groupName;
            $userToken = User::where('id', $request->user_id)->pluck('fcm_token')->toArray();
            return $this->AddUserToGroup($groupName, $userToken);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function DeleteUserFromGroupMethod(Request $request)
    {
        try{
            $groupName = $request->groupName;
            $userToken = User::where('id', $request->user_id)->pluck('fcm_token')->toArray();

            return $this->DeleteUserFromGroup($groupName, $userToken);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }
    /////////////// End Group Part /////////////////////
    ////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////
    /**
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function testTopicNormal()
    {
        try{
            $this->sendTopicNormalNotification('test 1', 'test topic 2', 'news');
            return response()->json(['message' => 'success']);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);

        }
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     * @throws PublicException
     * @author karam mustafa
     */
    protected function testTopicData()
    {
        try{
            $data = [
                'sender' => 'karam',
                'message' => 'test2 from data topic',
            ];
            $this->sendTopicDataNotification($data, 'news');
            return response()->json(['message' => 'success']);
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }

    /**
     * @param Request $request
     * @return string
     * @throws \GuzzleHttp\Exception\GuzzleException
     * @throws PublicException
     * @author karam mustafa
     */
    private function getDeviceTypeByToken($token)
    {
        try{
            if (isset($token)){
                $url = "https://iid.googleapis.com/iid/info/{$token}";
                $header = [
                    "Content-Type" => "application/json",
                    'Accept' => 'application/json',
                    "Authorization" => "bearer " . env('FCM_SERVER_KEY')];
                $client = new Client();
                $clientRequest = $client->request("POST", "$url", ['headers' => $header]);
                $content = $clientRequest->getBody()->getContents();
                $result = json_decode($content);
                return $result->platform;
            }
        } catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }
}
