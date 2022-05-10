<?php

namespace App\Exceptions;

use Exception;

class PublicException extends Exception
{
    public function render(){
        $code = 400;
        if (isset($this->code) && $this->code != 0){
            $code = $this->code;
        }
        $arr = [
            'data' => 'null',
            'message' => $this->message,
            'error' => $this->message != null ? true : false,
            'status' => $code,
            'notification' => "stopped if something went wrong",
        ];
        return response($arr , $arr['status']);
    }
}
