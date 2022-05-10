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

class ConsultantOrderRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            "description"=> "$this->rule|string",
        ];
        if ($this->isUpdatedRequest()){
            $this->rule = "sometimes";
            $arr = [
                "description" => "$this->rule|string",
                "solve_problem" => "$this->rule|string",
            ];
            //this for consulting manager
            if ($this->userHasRole(Auth::user(),array_merge(mainManagerRoles() , ['consulting_manager']))){
                return array_merge($arr,getOrderEditRequest($this->rule));
            }
            if ($this->userHasRole(Auth::user(),['customer'])) {
                return [
                    "status" => "sometimes|numeric|min:5|max:5",
                    'reason' => 'required_if:status,==,5'
                ];
            }
            // this if consulting employee
            if ($this->userHasRole(Auth::user(),['consulting_employee'])){
                $arr = [
                    "status" => "sometimes|numeric|min:7|max:7",
                    "solve_problem" => "required|string",
                ];
                return  $arr;
            }

            //this for normal user customer
            return array_merge($arr , ['payment_method']);
        }
        return array_merge($arr,getOrderEditRequest('not_required'));
    }
}
