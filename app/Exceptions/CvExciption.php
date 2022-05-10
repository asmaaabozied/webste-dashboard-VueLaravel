<?php

namespace App\Exceptions;

use Exception;

class CvExciption extends Exception
{
    public function render(){
            $arr = [
                'data' => 'null',
                'error' => $this->message,
                'stutes' => 400,
            ];
        return response($arr);
    }
}
