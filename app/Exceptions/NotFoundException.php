<?php

namespace App\Exceptions;

use Exception;

class NotFoundException extends Exception
{

    public function render(){
        $arr = [
            'data' => 'null',
            'message' => $this->message,
            'error' => $this->message != null ? true : false,
            'status' => 404,
            'notification' => "stopped if something went wrong",
        ];
        return response($arr);
    }
}
