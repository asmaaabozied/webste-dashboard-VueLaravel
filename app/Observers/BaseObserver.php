<?php


namespace App\Observers;
use App\Events\PublicSendNotification;
use App\User;


/**
 * Class BaseObserver
 * @author karam mustafa
 * @package App\Observers
 */
class BaseObserver
{
    /**
     * @param array|null $where
     * @param array|null $message
     * @author karam mustafa
     */
    protected function sendFromModel(?array $where , ?array $message):void {

        $extraData = [
            'users'=> User::where($where)->get(),
            'title' => 'inmaa',
            'message' => $message,
        ];
        event(new PublicSendNotification($extraData));
    }
}
