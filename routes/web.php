<?php

use Illuminate\Support\Facades\Route;





Route::get('/apple-app-site-association', 'PaymentController@sendForMobileApp');

Route::get('/{any}', function () {
   return view('main');
})->where('any', '.*');
