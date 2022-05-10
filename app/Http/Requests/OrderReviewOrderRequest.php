<?php

namespace App\Http\Requests;


use Illuminate\Support\Facades\Auth;
use function App\Helpers\mainManagerRoles;

class OrderReviewOrderRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            'description' => 'required|string',
            // 'order_id' => 'required|exists:orders,id',
        ];
        if ($this->isUpdatedRequest()){
            $arr = [
                'description' => 'sometimes|string',
                // 'order_id' => 'sometimes|exists:orders,id',
            ];
            if ($this->userHasRole(Auth::user(),['customer'])) {
                return [
                    // "status" => "sometimes|numeric|min:5|max:5",
                    // 'reason' => 'required_if:status,==,5'
                ];
            }
            //this for managers
            if ($this->userHasRole(Auth::user(),
                array_merge(mainManagerRoles() , ['maintenance_manager'])
            )){
                return array_merge($arr,['status' => 'sometimes|numeric|min:0|max:4']);
            }
            return $arr;
        }
        return $arr;
    }
}
