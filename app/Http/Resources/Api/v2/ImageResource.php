<?php

namespace App\Http\Resources\Api\v2;

use App\MaintenanceOrder;
use App\Message;
use App\Order;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,

            "image" => $this->image,

            "user_id" => $this->user_id,

            "user_info" => new UserResource(User::find($this->user_id)),

            "message_id" => $this->message_id,

            "message_info" => Message::find($this->message_id),

            "maintenance_order_id" => $this->maintenance_order_id,

            "maintenance_order_info" => new MaintenanceOrderResource(MaintenanceOrder::find($this->maintenance_order_id)),

            "order_id" => $this->order_id,

            "order_info" => Order::find($this->order_id),

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
