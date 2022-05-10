<?php

namespace App;



class Message extends BaseModel
{
    protected $imagePath = "files/images/message_images/";
    protected $fillable =[
        'response_message_id' ,
        'text',
        'has_images',
        'user_id',
        'department_id'

    ];
    protected $appends = ['images'];

    protected function getImagesAttribute()
    {
        return $this->has_images ? Image::where('message_id' , $this->id)->getWithOrderByDesc() : null;
    }
    public function toArray()
    {
        $data = parent::toArray();
        $data['user_info'] = $this->user()->toBase()->get(['user_name' , 'id'])->first();
        $data['response_for_current_message'] = Message::where('response_message_id' , $this->id)->getWithOrderByDesc();
//        $data['response_for_current_message'] = $this->response;
        return $data;
    }

    public function response(){
        return $this->belongsTo(Message::class , 'response_message_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function department(){
        return $this->belongsTo(Department::class);
    }
}
