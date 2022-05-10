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


class ServiceResource extends JsonResource
{

    public function toArray($request)
    {
        $arr = [
            "id"     => $this->id,
            "img"    => $this->img,
            "link"   => $this->link,
            "rating" => $this->rating,
        ];

        if ($request->getLocale() == "ar") {
            $arr["name"]        = $this->name_ar;
            $arr["description"] = $this->description_ar;
        }
        else {
            $arr["name"]        = $this->name_en;
            $arr["description"] = $this->description_en;
        }

        return $arr;

    }
}
