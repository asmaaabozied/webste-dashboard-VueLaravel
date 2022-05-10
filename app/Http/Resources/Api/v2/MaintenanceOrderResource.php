<?php

namespace App\Http\Resources\Api\v2;

use App\Http\Requests\NeededSparePartRequest;
use App\Image;
use App\MaintenanceOrder;
use App\MaintenanceOrderFee;
use App\Order;
use App\OrderSparePart;
use Illuminate\Http\Resources\Json\JsonResource;

class MaintenanceOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        return [
            "id"              => $this->id,
            "device_type"     => $this->device_type,
            "lat"             => $data['lat'],
            "lon"             => $data['lon'],
            "description"     => $this->description,
            "warranty_image"  => $this->warranty_image,
            "warranty_type"   => $this->warranty_type,
            "fix_place"       => $this->fix_place,
            "need_spare_part" => sizeof($this->spareParts) > 0 ? true : false,
            "spare_part"      => $this->spareParts,
            "has_image"       => $this->has_image,
            "appointment"     => collect($this->appointment)->except('user'),
            "fee_info"        => MaintenanceOrderFee::with(['fees'])->where('maintenance_order_id', $this->id)->getWithOrderByDesc(),
            "images"          => $this->has_image ? Image::where('maintenance_order_id', $this->id)->getWithOrderByDesc() : null,
            "order_id"        => $this->order_id,
            "order_info"      => $data['order_info'],
            'created_at'      => $this->created_at,
            'updated_at'      => $this->updated_at,
            'manufacture'     => $this->manufactures,
            "reason_restart"  => $this->reason_restart,
        ];

    }
}
