<?php

namespace App\Exceptions;

use Exception;
use Throwable;

class CheckDiscount extends Exception
{
    public function render()
    {
        $arr = [
            'data' => 'null',
            'error' => $this->message,
            'status' => 400,
        ];
        return response($arr);
    }
}
