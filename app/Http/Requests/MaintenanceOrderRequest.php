<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use function App\Helpers\getOrderEditRequest;
use function App\Helpers\maintenanceOrderRole;

class MaintenanceOrderRequest extends BaseRequest
{

    public function rules()
    {
        $this->rule = "required";
        $arr = [
            "device_type" => "$this->rule",
            "manufacture" => "$this->rule",
            "lat" => "required|numeric|min:-90|max:90",
            "lon" => "required|numeric|min:-180|max:180",
            "description" => "$this->rule",
            "warranty_image" => "sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "appointment_id" => "$this->rule|exists:appointments,id",
            "fix_place" => "$this->rule|numeric|min:0|max:2",
            "has_image" => "$this->rule|boolean",
            "images.*" => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|required_if:has_image,1',
        ];

        if ($this->userHasRole(Auth::user(),['maintenance_manager','technical_manager'])) {
            $arr['user_id'] = 'required|exists:users,id';
        }
        if (request()->method() == 'PATCH'  || request()->method() == 'PUT') {
            $this->rule = 'sometimes';
            $arr = [
                "device_type" => " $this->rule",
                "manufacture" => " $this->rule||exists:manufactures,id",
                "lat" => "$this->rule|numeric|min:-90|max:90",
                "lon" => "$this->rule|numeric|min:-180|max:180",
                "description" => " $this->rule",
                "warranty_image" => "$this->rule|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
                "appointment_id" => "$this->rule|exists:appointments,id",
                "fix_place" => " $this->rule|numeric|min:0|max:2",
                "has_image" => " $this->rule|boolean",
                "fee_id" => " $this->rule|exists:fees,id",
                "fee_amount" => " $this->rule|numeric",
                "images.*" => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|required_if:has_image,1',
            ];
            //this for managers
            if ($this->userHasRole(Auth::user(),maintenanceOrderRole())) {
                return array_merge($arr, getOrderEditRequest($this->rule));
            }
            //this for technical employee

            if ($this->userHasRole(Auth::user(),['technical'])) {
                return [
                    "technical_status" => "required|numeric|min:0|max:1",
                    "technical_reason" => "sometimes|nullable",
                ];
            }
            //this for customer or gallery
            if ($this->userHasRole(Auth::user(),['customer'])) {
                return [
                    "status" => "sometimes|numeric|min:5|max:5",
                    'reason' => 'required_if:status,==,5'
                ];
            }
            return array_merge($arr, ['payment_method']);
        }
        return  $arr;
    }
}
