<?php

namespace App;



class ContentManagement extends BaseModel
{
    /**
     * @var array
     */
    protected $fillable = ['name_en' , 'name_ar' , 'content_ar' , 'content_en' , 'pageOrder'];
    /**
     * @var string
     */
    protected $table = 'content_management';

    /**
     * @param $val
     * @return mixed
     * @author karam mustafa
     */
    public function getContentEnAttribute($val){
        return json_decode($val);
    }

    /**
     * @param $val
     * @return mixed
     * @author karam mustafa
     */
    public function getContentArAttribute($val){
        return json_decode($val);
    }
    /**
     * @param $val
     * @return mixed
     * @author karam mustafa
     */
    public function setContentEnAttribute($val){
        $this->attributes['content_en'] = json_encode($val);
    }

    /**
     * @param $val
     * @return mixed
     * @author karam mustafa
     */
    public function setContentArAttribute($val){
        $this->attributes['content_ar'] = json_encode($val);
    }
}
