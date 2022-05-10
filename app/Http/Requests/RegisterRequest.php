<?php

namespace App\Http\Requests;

use App\Exceptions\PublicException;
use http\Client\Curl\User;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RegisterRequest
 * @author karam mustafa
 * @package App\Http\Requests
 */
class RegisterRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $arr = [
            'user_name' => 'required',
            'password'  => 'required',
            'phone'     => 'required|min:10',
            'lat'       => 'sometimes|numeric|min:-90|max:90',
            'lon'       => 'sometimes|numeric|min:-180|max:180',
        ];
        $arr['user_name'] = $this->checkUserName();

        return $arr;
    }

    /**
     * @return string
     * @author karam mustafa
     */
    private function checkUserName()
    {
        if (isset($this->request->all()['user_name'])) {
            $username = $this->request->all()['user_name'];
            $user = \App\User::where('user_name', $username)->first();
            if (isset($user) && $user->is_verified == 1) {
                return "required|unique:users,user_name";
            } else {
                return "required";
            }
        }else{
            return "required";
        }
    }
}
