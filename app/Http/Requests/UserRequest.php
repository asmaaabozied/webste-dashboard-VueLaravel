<?php

namespace App\Http\Requests;

use App\Exceptions\PublicException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserRequest extends BaseRequest
{
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     * @throws PublicException
     */
    public function rules()
    {

        if (!in_array(request()->role , $this->role())){
            throw new PublicException('this role is undefined in our system ');
        }
        return [
            'user_name' => 'required',
            'password' => 'required',
            'role' => 'required',
            'lang' => ['required' , Rule::in(['ar' , 'en'])],
        ];
    }
    private function role(){
        return [
            'system_manager',
            'admin' ,
            'manufacture_manager',
            'installation_manager',
            'technical_manager ',
            'technical',
            'consulting_manager',
            'consulting_employee',
            'hr_manager',
            'sales_manager',
            'customer',
            'gallery',
        ];
    }
}
