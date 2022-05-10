<?php

namespace App\Http\Resources\Api\v1;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class ProductResource
 * @author karam mustafa
 * @package App\Http\Resources\Api\v1
 */
class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'                  => $this->id,
            'name'                => $this->name,
            'name_ar'             => $this->name_ar,
            'model_code'          => $this->model_code,
            'description'         => $this->description,
            'description_ar'      => $this->description_ar,
            'quantity_desciption' => $this->getQuantity($this->quantity),
            'quantity'            => $this->quantity,
            'price'               => ($this->price),
            'category'            => $this->category,
            'image'               => $this->image,
            'offerType'           => $this->getOfferType($this->offerType),
            'offer_rateOrAmount'  => $this->offer_rateOrAmount
        ];
    }

    /**
     * @param $quantity
     * @return string
     * @author karam mustafa
     */
    protected function getQuantity($quantity)
    {
        if ($quantity < 5 ){
            return "low stock";
        }elseif ($quantity == 0 ){
            return "out if stock";
        }
        return "in stock";
    }

    /**
     * @param $offerType
     * @return string|null
     * @author karam mustafa
     */
    protected function getOfferType($offerType)
    {
        if (is_null($offerType)){
            return null;
        }
        else if ($offerType == 0){
            return "rate";
        }
        elseif ($offerType == 1){
            return "amount";
        }

    }
}
