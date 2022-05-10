<?php


namespace App\Notifications;


/**
 * Class ShamelSMSService
 * @author karam mustafa
 * @package App\Notifications
 */
class ShamelSMSService
{
    /**
     * @author karam mustafa
     * @var string
     */
    public static $username = "Mohamadaldaker";
    /**
     * @author karam mustafa
     * @var string
     */
    public static $password = "Aa123456789@";
    /**
     * @author karam mustafa
     * @var string
     */
    public static $senderName = "alinmaone";

    /**
     * @param $username
     * @param $password
     * @return bool|string
     * @author karam mustafa
     */
    public static function Authentication($username, $password)
    {
        header("Content-Type: text/html; charset=utf-8");
        $url = "http://www.shamelsms.net/api/users.aspx?code=1&username=$username&password=$password";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        $content = curl_exec($ch);
        return $content;
    }

    /**
     * @param $username
     * @param $password
     * @return bool|string
     * @author karam mustafa
     */
    public static function GetSenderNames($username, $password)
    {
        header("Content-Type: text/html; charset=utf-8");
        $url = "http://www.shamelsms.net/api/users.aspx?code=8&username=$username&password=$password";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        $content = curl_exec($ch);
        return $content;
    }

    /**
     * @param $username
     * @param $password
     * @return bool|string
     * @author karam mustafa
     */
    public static function GetBalance($username, $password)
    {
        header("Content-Type: text/html; charset=utf-8");
        $url = "http://www.shamelsms.net/api/users.aspx?code=7&username=$username&password=$password";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        $content = curl_exec($ch);
        return $content;
    }

    /**
     * @param $mobile
     * @param $message
     * @param null $username
     * @param null $password
     * @param null $senderName
     * @return bool|string
     * @author karam mustafa
     */
    public static function send($mobile, $message, $username = null, $password = null, $senderName = null)
    {
        $username = $username ? $username : self::$username;
        $password = $password ? $password : self::$password;
        $senderName = $senderName ? $senderName : self::$senderName;
        $url = 'http://www.shamelsms.net/api/httpSms.aspx?' . http_build_query(array(
                'username' => $username,
                'password' => $password,
                'mobile' => $mobile,
                'message' => $message,
                'sender' => $senderName,
                'unicodetype' => 'U'
            ));

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        $content = curl_exec($ch);
        return $content;

    }

}
