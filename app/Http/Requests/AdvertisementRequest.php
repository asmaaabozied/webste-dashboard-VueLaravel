<?php

namespace App\Http\Requests;



class AdvertisementRequest extends BaseRequest
{
   /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'start_date'     => 'required |date|after_or_equal:today',
            'end_date'       => 'required |date|after_or_equal:start_date',
            'image'          => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'main_title'     => 'required ',
            'main_title_ar'  => 'required ',
            'description'    => 'required',
            'description_ar' => 'required',
            'sub_title'      => 'required',
            'sub_title_ar'   => 'required',
            'price'          => 'required | numeric |min:0',
        ];
    }

}
