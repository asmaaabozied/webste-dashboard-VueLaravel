<?php

namespace App\Http\Requests;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use function App\Helpers\getOrderEditRequest;
use function App\Helpers\mainManagerRoles;
use function App\Helpers\managerOrderRole;

class JobApplicationOrderRequest extends BaseRequest
{




    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            // "cv" => "$this->rule |mimes:pdf,xlx,csv|max:2048",
            // "job_type" => "$this->rule",
        ];
        if ($this->isUpdatedRequest()){
            $this->rule = "sometimes";
            $arr = [
                // "cv" => "$this->rule |max:1024|file",
                // "job_type" => "$this->rule",
                '_method' => 'required'
            ];
            if ($this->userHasRole(Auth::user(),['customer'])) {
                return [
                    // "status" => "sometimes|numeric|min:5|max:5",
                    // 'reason' => 'required_if:status,==,5'
                ];
            }
            if ($this->userHasRole(Auth::user(),array_merge(mainManagerRoles() , ['hr_manager']))){
                return array_merge($arr,getOrderEditRequest($this->rule));
            }
            return array_merge($arr);
        }
        return array_merge($arr,getOrderEditRequest('not_required'));
    }

}
