<?php

namespace App\Http\Resources\Api\v2;

use App\DiscountCode;
use Illuminate\Http\Resources\Json\JsonResource;
class OrderResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                           => $this->id,
            'price'                        => $this->price,
            'payment_method'               => $this->payment_method,
            'status'                       => $this->resolveStatus($this->status, $this->type),
            'reason'                       => $this->reason,
            'technical_reason'             => $this->technical_reason,
            'technical_status'             => $this->resolveTechStatus($this->technical_status, $this->status),
            'user_id'                      => $this->user_id,
            'type'                         => $this->type,
            'rating_info'                  => $this->rating,
            'job_application_order'        => $this->jobApplicationOrder,
            'maintenance_order'            => new MaintenanceOrderResource($this->maintenanceOrder),
            'consultant_order'             => $this->consultantOrder,
            'prevention_maintenance_order' => $this->preventionMaintenanceOrder,
            'installment_order'            => $this->installmentOrder,
            // 'other_type_data' => $this[$this->snakeToCamelCase($this->type)],
            'OrderReviewOrder'             => $this->OrderReviewOrder,
            'discount_code_id'             => $this->discount_code_id,
            'discount_code_info'           => new DiscountCodeResource(DiscountCode::find($this->discount_code_id)),
            'employee_id'                  => $this->employee_id,
            'created_at'                   => $this->created_at,
            'updated_at'                   => $this->updated_at,
        ];
    }


    private function snakeToCamelCase($string, $capitalizeFirstCharacter = false)
    {

        $str = str_replace(' ', '', ucwords(str_replace('_', ' ', $string)));

        if (!$capitalizeFirstCharacter) {
            $str[0] = strtolower($str[0]);
        }

        return $str;
    }

    private function resolveStatus($status, $type)
    {
        if ($status == 'order under maintenance' && in_array($type , ['prevention_maintenance_order' , 'consultant_order'])) {
            return "order is being processed";
        }
        return $status;
    }

    /**
     * @param $technicalStatus
     * @param $status
     * @return string
     * @author karam mustafa
     */
    private function resolveTechStatus($technicalStatus, $status)
    {
        $arr = ['order finish',
            'order declined',
            'order declined by client',
            'order finish with unfixed device',];
        if (in_array($status, [$arr])) {
            $technicalStatus = 'order closed';
        }
        return $technicalStatus;
    }
}
