<?php

namespace App;
use Illuminate\Support\Facades\DB;

class Suggestion extends BaseModel
{

    protected $fillable = ['text' , 'user_id' , 'department_id'];


    public function toArray()
    {

        $data = parent::toArray();
        $data['department_info'] = DB::table('departments')->where('id' , $this->department_id)->first();
        $data['user_id'] = $this->user_id;
        $data['user_info'] = DB::table('users')->find($this->user_id);
        return $data;
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
