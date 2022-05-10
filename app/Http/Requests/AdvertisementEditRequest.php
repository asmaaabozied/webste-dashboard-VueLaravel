<?php

namespace App\Http\Requests;

use App\Exceptions\PublicException;

class AdvertisementEditRequest extends BaseRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     * @throws PublicException
     * @author karam mustafa
     */
    public function rules()
    {
        if (request()->isMethod('POST') && !isset(request()->_method)) {
            throw new PublicException(
                "this action has an image or file , please put request method type following (POST) and add _method
                param to request body with value ( PUT )"
            );
        }
        return [
            'start_date'  => 'sometimes |date|after_or_equal:today|date_format:Y-m-d',
            'end_date'    => 'sometimes |date|after_or_equal:start_date|date_format:Y-m-d',
            'image'       => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'main_title'  => 'sometimes ',
            'description' => 'sometimes',
            'sub_title'   => 'sometimes',
            'price'       => 'sometimes|numeric|min:0',
            'isEnabled'   => 'sometimes|boolean'
        ];
    }
}
