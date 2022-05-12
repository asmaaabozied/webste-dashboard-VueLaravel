<?php

namespace App\Http\Requests;

use App\Exceptions\PublicException;
use App\User;


class EmployeeRequest extends BaseRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     * @throws PublicException
     */
    public function rules()
    {

        $arr = [
            "phone" => "{$this->rule}|numeric|min:10|unique:employees,phone",
            "nationality" => "{$this->rule}",
            "department_id" => "sometimes|exists:departments,id",
            "image" => "sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
            "id_number" => "{$this->rule}|unique:employees,id_number",
            "role" => "{$this->rule}|exists:roles,name",
            "user_name" => "{$this->rule}|unique:users,user_name",
            "car_id" => "sometimes|exists:cars,id",
            "manger_id" => "sometimes|exists:employees,id",
            "password" => "{$this->rule}",
            //            "permissions" => "{$this->>rule}|array|min:0",
        ];
        if ($this->isUpdatedRequest()) {
            $user_id = $this->getUserFromEmployee($this->employee);
            $this->rule = 'sometimes';
            $arr = [
                "phone" => "{$this->rule}|numeric|min:10|unique:employees,phone,$this->employee",
                "nationality" => "{$this->rule}",
                "department_id" => "sometimes|exists:departments,id",
                "image" => "sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
                "id_number" => "{$this->rule}|unique:employees,id_number,{$this->employee}",
                "role" => "{$this->rule}|exists:roles,name",
                "user_name" => "{$this->rule}|unique:users,user_name,${user_id}",
                "car_id" => "sometimes|exists:cars,id",
                "manger_id" => "sometimes|exists:employees,id",

                "password" => "{$this->rule}",
            ];
        }
        return $arr;
    }

    /**
     * @param $employee
     * @return mixed
     * @throws PublicException
     * @author karam mustafa
     */
    private function getUserFromEmployee($employee)
    {
        if ($this->isUpdatedRequest()) {
            if (isset(User::find($employee)->id)) {
                return User::find($employee)->id;
            }
            throw new PublicException('this user is not exists as employee');
        }
    }
}
