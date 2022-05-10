<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PublicNotification extends Notification
{
    use Queueable;
    protected $mesaage, $order_id, $order_type;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($mesaage, $order_id, $order_type)
    {
        $this->mesaage = $mesaage;
        $this->order_id = $order_id;
        $this->order_type = $order_type;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'message' => $this->mesaage,
            'order_id' => $this->order_id?? null,
            'order_type' => $this->order_type?? null,
        ];
    }
}
