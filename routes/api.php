<?php


use Illuminate\Support\Facades\Route;


// Route::post('/users/create-user', 'UserController@createUser');

Route::post('/create-usersss', 'UserController@createUser');


Route::post('login', 'AuthSystemController@login')->name('login')->middleware('VerificationCustomersAndGalleries');

Route::post('customer/register', 'AuthSystemController@register')->name('register');
Route::post('gallery/register', 'AuthSystemController@gallery_register')->name('gallery_register');
Route::post('confirmCustomerCode', 'ConfirmationKeyController@checkCustomerCode');
Route::post('reSendCustomerConfirmCode', 'ConfirmationKeyController@reSendCustomerConfirmCode');
Route::get('allCountry', 'Api\v2\AllCountryController@index');

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => ['VerificationCustomersAndGalleries' , 'Lang']], function () {
        // auth
        Route::post('logout', 'AuthSystemController@logout');
        Route::post('updatePassword', 'AuthSystemController@updatePassword');
        Route::post('getAuthDetails', 'AuthSystemController@getAuthDetails');

        // permission
        Route::get('SuggestedPermissions', 'SuggestedPermissionsController@suggestion');
        Route::get('allPermissions', 'SuggestedPermissionsController@allPermissions');
        Route::get('allRole', 'SuggestedPermissionsController@allRole');

        //notification
        Route::get('getUserNotification', 'FCMController@getUserNotification');
        Route::get('LastNotification', 'FCMController@LastNotification');
        Route::post('MakeAllAsRead', 'FCMController@MakeAllAsRead');
        Route::post('send_token', 'FCMController@index');

        // payment
        Route::post('initiatePayment', 'PaymentController@initiatePayment');
        Route::post('executePayment', 'PaymentController@executePayment');
        Route::get('payment/checkPayment', 'PaymentController@checkPayment');
        Route::post('directPayment', 'PaymentController@directPayment');
        Route::post('extractPaymentId', 'PaymentController@extractPaymentId');

    });
});
