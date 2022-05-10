<?php

namespace App\Exceptions;

use Exception;

class AccessException extends Exception
{
    public function render(){
        $arr = [
            'data' => 'null',
            'message' => $this->message,
            'error' => $this->message != null ? true : false,
            'status' => 403,
        ];
        return response($arr);
    }
}
