<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use function App\Helpers\getOrderEditRequest;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerOrderRole;

/**
 * Class PreventionMaintenanceOrderRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class PreventionMaintenanceOrderRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            "business_name" => "sometimes",
            "business_phone_number" => "sometimes",
            "lat" => "$this->rule|numeric|min:-90|max:90",
            "lon" => "$this->rule|numeric|min:-180|max:180",
            "business_type" => "sometimes",
            "maintenance_type" => "$this->rule|numeric|max:1|min:0",
            "manufactures_id" => "sometimes",
        ];
        if ($this->userHasRole(Auth::user(),['customer'])) {
            $arr ['status'] = 'sometimes|numeric|min:5|max:5';
            $arr ['reason'] = 'sometimes';
        }
        if ($this->isUpdatedRequest()) {
            $this->rule = "sometimes";
            $arr = [
                "business_name" => "sometimes",
                "business_phone_number" => "sometimes",
                "lat" => "$this->rule|numeric|min:-90|max:90",
                "lon" => "$this->rule|numeric|min:-180|max:180",
                "business_type" => "sometimes",
                "maintenance_type" => "$this->rule|numeric|max:1|min:0",
                "manufactures_id" => "sometimes",
            ];
            if ($this->userHasRole(Auth::user(),['customer'])) {
                $arr ['status'] = 'sometimes|numeric|min:5|max:5';
                $arr ['reason'] = 'required_if:status,==,5';
            }
            if ($this->userHasRole(Auth::user(),managerOrderRole())) {
                return array_merge($arr, getOrderEditRequest($this->rule));
            }
        }
        return array_merge($arr, ['payment_method']);
    }
}
