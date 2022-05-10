<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use function App\Helpers\getOrderEditRequest;
use function App\Helpers\managerOrderRole;


class InstallmentOrderRequest extends BaseRequest
{
    public function rules()
    {

        $arr = [
            "decoding_lat"     => "$this->rule",
            "appointment_id"   => "$this->rule|exists:appointments,id",
            "decoding_lon"     => "$this->rule",
            "installation_lat" => "$this->rule",
            "installation_lon" => "$this->rule",
            "payment_method"   => ["sometimes", Rule::in([0, 1, 2])],
            "type"             => "$this->rule",
            "decoding_des"     => "sometimes",
            "installation_des" => "sometimes",
            "items"            => "$this->rule"
        ];
        if ($this->userHasRole(Auth::user(), ['customer'])) {
            $arr ['status'] = 'sometimes|numeric|min:5|max:5';
            $arr ['reason'] = 'required_if:status,==,5';
        }

        $arr = $this->discusUserNameAndPhone($arr);

        if ($this->userHasRole(Auth::user(), ['installation_manager', 'technical_manager'])) {
            $arr['user_id'] = 'required|exists:users,id';
        }

        if ($this->isUpdatedRequest()){
            $this->rule = "sometimes";
            $arr = [
                "decoding_lat"     => "$this->rule|numeric|min:-90|max:90",
                "decoding_lon"     => "$this->rule|numeric|min:-180|max:180",
                "installation_lat" => "$this->rule|numeric|min:-90|max:90",
                "installation_lon" => "$this->rule|numeric|min:-180|max:180",
                "appointment_id"   => "$this->rule|exists:appointments,id",
                "type"             => "$this->rule",
                "decoding_des"     => "sometimes",
                "installation_des" => "sometimes",
                "items"            => "$this->rule"
            ];
            if ($this->userHasRole(Auth::user(),['customer'])) {
                $arr ['status'] = 'sometimes|numeric|min:5|max:5';
                $arr ['reason'] = 'required_if:status,==,5';
            }
            $arr = $this->discusUserNameAndPhone($arr);
            //this for managers
            if ($this->userHasRole(Auth::user(),managerOrderRole())){
                return array_merge($arr,getOrderEditRequest($this->rule));
            }
            //this for technical employee
            if ($this->userHasRole(Auth::user(), ['technical'])) {
                return $arr = [
                    "technical_status" => "required|numeric|min:0|max:1",
                    "technical_reason" => "sometimes|nullable",
                ];
            }
            return array_merge($arr , ['payment_method']);
        }
        return $arr;
    }
    public function messages(){
        return [
            "name_emp.required" => "you are not customer or gallery please insert your name by send name_emp instead of name",
            "phone_emp.required" => "you are not customer or gallery please insert your phone_emp instead of phone",
        ];
    }

    protected function discusUserNameAndPhone($arr)
    {
        if (!is_null(Auth::user()->gallery)){
            $arr["name"] = "$this->rule";
            $arr["phone"] = "$this->rule|numeric";
        }

        if(is_null(Auth::user()->gallery) && is_null(Auth::user()->customer)){
            $arr["name_emp"] = "$this->rule";
            $arr["phone_emp"] = "$this->rule|numeric";
        }
        return $arr;
    }
}
