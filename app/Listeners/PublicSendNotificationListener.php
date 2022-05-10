<?php

namespace App\Listeners;

use App\Http\Controllers\BaseController;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class PublicSendNotificationListener extends  BaseController
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     * @throws \App\Exceptions\PublicException
     */
    public function handle($event)
    {
        $this->sendMessageToUsers($event->extraData);
    }
}
