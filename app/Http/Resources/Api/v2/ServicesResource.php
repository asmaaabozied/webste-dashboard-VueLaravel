<?php

namespace App\Http\Resources\Api\v2;

use App\Employee;
use App\Exceptions\PublicException;
use App\Http\Resources\Api\v1\EmployeeResource;
use App\Message;
use App\Order;
use App\OrderReviewOrder;
use App\Suggestion;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Auth;
use function App\Helpers\managerAndDepartment;
use function App\Helpers\managerOrderRole;


class ServicesResource extends JsonResource
{

    public function toArray($request)
    {
        $arr = [
            "id"     => $this->id ?? '',
            "img"    =>$this->img,
            "link"   => $this->link ?? '',
            "role_id"=>$this->roles->pluck('id')->toArray() ?? '',
            "rating" => $this->rating ?? '',

            "name_en" => $this->name_en ?? '',
            "name_ar" => $this->name_ar ?? '',

            "description_en" => $this->description_en ?? '',
            "description_ar" => $this->description_ar ?? '',
        ];

        // if ($request->getLocale() == "ar") {
        //     $arr["name"]        = $this->;
        //     $arr["description"] = $this->description_ar;
        // }
        // else {
        //     $arr["name"]        = $this->name_en;
        //     $arr["description"] = $this->description_en;
        // }

        return $arr;

    }
}
