<?php


namespace App\Http\Requests;



class ContentManagementRequest extends BaseRequest
{
    

    /**
     * @return array
     */
    public function rules()
    {
        $arr = [
            "name_en" => "$this->rule|unique:content_management,name_en",
            "name_ar" => "$this->rule|unique:content_management,name_ar",
            "content_ar" => "$this->rule",
            "content_en" => "$this->rule",
            "pageOrder" => "$this->rule|numeric",
        ];
        if ($this->isUpdatedRequest()) {
            $this->rule = "sometimes";
            $arr = [
                "name_en" => "$this->rule|unique:content_management,name_en,$this->contentManagement",
                "name_ar" => "$this->rule|unique:content_management,name_ar,$this->contentManagement",
                "content_ar" => "$this->rule",
                "content_en" => "$this->rule",
                "pageOrder" => "$this->rule|numeric",
            ];
        }
        return $arr;
    }
}
