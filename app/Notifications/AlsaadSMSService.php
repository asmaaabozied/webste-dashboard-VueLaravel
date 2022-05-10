<?php

namespace App\Notifications;

use DateTime;
use GuzzleHttp\Client;

class AlsaadSMSService
{

    protected static $username;
    protected static $password;
    protected static $senderName;

//    public function __construct(string $username = null, string $password = null, string $senderName = null)
//    {
//        $this->username = $username ? $username : config('services.sms.username');
//        $this->password = $password ? $password : config('services.sms.password');
//        $this->senderName = $senderName ? $senderName : config('services.sms.sender_name');
//    }

    public static function getUserName(): string
    {
        return self::$username;
    }

    public static function getPassword(): string
    {
        return self::$password;
    }

    public static function getSenderName(): string
    {
        return self::$senderName;
    }

    public static function sendSMS(string $message, array $numbers, string $delayTime = '', string $timeFormat = 'Y-m-d H:i')
    {
        $url = 'http://www.alsaad2.net/api/sendsms.php';
//        if ($delayTime != '' && $this->isValidDate($delayTime, $timeFormat)) {
//            $url .= '&datetime=' . $delayTime . '';
//        } elseif ($delayTime != '') {
//            return 'Date time format is not correct...';
//        }
        self::setProperties();
        $http = new Client();
        $res = $http->post($url, [
            'query' => [
                'username' => self::getUserName(),
                'password' => self::getPassword(),
                'message' => $message,
                'numbers' => implode(',', $numbers),
                'sender' => self::getSenderName(),
                'unicode' => 'e',
                'Rmduplicated' => '0',
                'return' => 'Json'
            ]
        ]);
        $code = $res->getBody()->getContents();
        $result = false;
        if ($code == '100') {
            $result = true;
        } else {
            $result = false;
        }
        $message = ErrorCodes::codeMessages[$code];
        return ['result' => $result, 'message' => $message];
    }

    private static function isValidDate($date, $format)
    {
        $dateObj = DateTime::createFromFormat($format, $date);
        if ($dateObj && $dateObj->format($format) == $date) {
            return $dateObj;
        } else {
            return false;
        }
    }

    public static function checkBalance(bool $hangedBalance = false)
    {
        $url = 'http://www.alsaad2.net/api/getbalance.php';
        self::setProperties();
        $query = [
            'username' => self::getUserName(),
            'password' => self::getPassword(),
            'return' => 'Json'
        ];
        if ($hangedBalance) {
            $query['hangedBalance'] = true;
        }
        $http = new Client();
        $res = $http->post($url, [
            'query' => $query
        ]);
        return ['result' => true, 'message' => $res->getBody()->getContents()];
    }

    private static function setProperties()
    {

        if (self::$username == null) {
            self::$username = config('services.sms.username');
        }
        if (self::$password == null) {
            self::$password = config('services.sms.password');
        }
        if (self::$senderName == null) {
            self::$senderName = config('services.sms.sender_name');
        }
    }

}

class ErrorCodes
{

    const codeMessages = [
        '100' => 'Numbers received succesfully',
        '101' => 'Data is incomplete',
        '102' => 'Username is incorrect',
        '103' => 'Password is incorrect',
        '104' => 'Database error',
        '105' => 'Insufficient balance',
        '106' => 'Sender name is incorrect',
        '107' => 'Sender name is blocked',
        '108' => 'Receivers numbers are incorrect',
        '109' => 'Can not send for more than 8 sections',
        '110' => 'Error saving sending result',
        '111' => 'Sending is shutdown',
        '112' => 'Message contains a blocked word',
        '113' => 'Account is not activated',
        '114' => 'Account is disabled',
        '115' => 'Phone is not activated',
        '116' => 'Email is not activated',
        '117' => 'Message is empty, cant not be sent',
        '1015' => 'Sender name is empty',
        '1014' => 'No receivers numbers are set',
        '1013' => 'Message text is empty',
        '1012' => 'Password is not set',
        '1011' => 'Username is not set',
        '1010' => 'Encryption error'
    ];

}
