<?php


use Illuminate\Support\Facades\Route;



//
Route::resource('getServicesType', 'getServicesTypeController');
Route::get('/getAllService', 'ServiceController@getAllService');
Route::resource('contentManagement', 'ContentManagementController')->only(['index', 'show']);



//start of roles And Permissions
Route::get('admin-panel/getALLRoles', 'rolesAndPermissions@getALLRoles');
Route::get('/admin-panel/getModulesRoles', 'rolesAndPermissions@getModulesRoles');
Route::post('/admin-panel/create-new-role', 'rolesAndPermissions@createNewRole');
route::get('/admin-panel/getRoleWithPermission/{id}', 'rolesAndPermissions@getRoleWithPermission');
Route::post('/admin-panel/update-role-permission', 'rolesAndPermissions@updateRolePermission');
//end Of roles And Permissions


// start of devices
Route::get('/admin-panel/devices/getAlldevices','devicesController@getAllDevices');
Route::POST('/admin-panel/devices/createUpdate','devicesController@createUpdate');
Route::get('/admin-panel/devices/getData/{id}','devicesController@getDeviceData');
Route::delete('/admin-panel/devices/delete/{id}','devicesController@destroy');

Route::get('/admin-panel/devices/getAllSparePart/{device_id}', 'devicesController@getAllSpareParts');

//end of devices


// start of sparePart
Route::get('/admin-panel/sparePart/getAlldevices','sparePartController@getAllDevices');
Route::POST('/admin-panel/sparePart/createUpdate','sparePartController@createUpdate');
Route::get('/admin-panel/sparePart/getData/{id}','sparePartController@getDeviceData');
Route::delete('/admin-panel/sparePart/delete/{id}','sparePartController@destroy');

Route::get('/admin-panel/sparePart/getAllSparePart/{device_id}', 'sparePartController@getAllSpareParts');

//end of sparePart

Route::group(['middleware' => 'auth:api'], function () {


    Route::group(['middleware' => ['VerificationCustomersAndGalleries' , 'Lang']], function () {
        Route::resource('user', 'UserController');

        Route::resource('cars', 'CarController');


        Route::get('admin-panel/getAllService', 'ServiceController@getAllServiceForAdminPanel');
        Route::post('/admin-panel/services/create-service', 'ServiceController@createService');
        Route::delete('/admin-panel/services/delete/{itemId}', 'ServiceController@deleteItem');
        Route::get('/admin-panel/services/getService/{itemId}', 'ServiceController@getService');
        Route::post('/admin-panel/services/update-service', 'ServiceController@updateService');

        Route::get('admin-panel/getAllUser', 'UserController@getAllUser');
        Route::post('/admin-panel/users/create-user', 'UserController@createUser');

        Route::delete('/admin-panel/users/delete/{itemId}', 'UserController@deleteItem');
        Route::delete('/admin-panel/users/status/{itemId}', 'UserController@statusItem');

        Route::get('/admin-panel/users/getUser/{itemId}', 'UserController@getUser');
        Route::post('/admin-panel/users/update-user', 'UserController@updateUser');


        Route::resource('gallery', 'GalleryController');
        Route::resource('country', 'CountryController');
        Route::resource('city', 'CityController');
        Route::resource('user', 'UserController');
        Route::resource('customer', 'CustomerController');
        Route::resource('customer_alerts', 'CustomerAlertController');
        Route::resource('InstallmentOrder', 'InstallmentOrderController')->except(['destroy']);
        Route::put('restartInstallmentOrder/{id}', 'InstallmentOrderController@restartInstallmentOrder');
        Route::get('orderss', 'OrderController@getorderss')->name('orderss');


        Route::resource('order', 'OrderController')->except(['destroy']);
        Route::resource('OrderReviewOrder', 'OrderReviewOrderController')->except(['destroy']);


        //OrderServicesPage

        Route::post('OrderServicesPage', 'OrderReviewOrderController@OrderServicesPage');

        Route::resource('rating', 'RatingController');
        Route::resource('discountCode', 'DiscountCodeController');
        Route::resource('contentManagement', 'ContentManagementController')->except(['index', 'show']);

        Route::resource('jobApplicationOrder', 'JobApplicationOrderController')->except(['destroy']);
        // download cv file
        Route::get('jobApplicationOrder/getCvFile/{id}', 'JobApplicationOrderController@getCvFile');
        Route::resource('ConsultantOrder', 'ConsultantOrderController')->except(['destroy']);
        Route::resource('MaintenanceOrder', 'MaintenanceOrderController')->except(['destroy']);
        Route::resource('Image', 'ImageController');
        Route::resource('Message', 'MessageController');
        Route::resource('PreventionMaintenanceOrder', 'PreventionMaintenanceOrderController')->except('destroy');
        Route::resource('manufacture', 'ManufactureController');
        Route::get('/getManufactureDevices/{id}','ManufactureController@getManufactureDevices');

        Route::get('/getsparepartDevices/{id}/{ids}','ManufactureController@getsparepartDevices');

        Route::post('orderFinished', 'OrderController@orderFinished');
        Route::put('MaintenanceSetStatus/{id}', 'MaintenanceOrderController@updateStatus');
        Route::put('restartMaintinanceOrder/{id}', 'MaintenanceOrderController@restartMaintinanceOrder');

        //////////////////////////////////////////////////////////


        Route::resource('suggestion', 'SuggestionController');
        Route::resource('fee', 'FeeController');
        Route::resource('topic', 'TopicController');

        Route::post('user/changeLang', 'UserController@changeLang');
        Route::post('confiremGallery/{id}', 'GalleryController@confiremGallery');
        Route::get('getOrderByType/{id}', 'OrderController@getOrderByType');

        // maintenance order process
        // with warranty path
        Route::post('employeeDetermineFixLocation', 'MaintenanceOrderController@employeeDetermineFixLocation');
        Route::post('determineSparePart', 'MaintenanceOrderController@determineSparePart');
        Route::post('deleteSparePart', 'MaintenanceOrderController@deleteSparePart');


        // without warranty path
        Route::post('changeOrderToWithoutWarranty/{maintenanceOrderId}', 'MaintenanceOrderController@changeOrderToWithoutWarranty');
        Route::post('managerCheckUpFee', 'MaintenanceOrderController@managerCheckUpFee');
        Route::put('ChangeFeeMaintenanceOrder', 'MaintenanceOrderController@ChangeFee');
        Route::post('managerCheckUpFeeInstallment', 'InstallmentOrderController@managerCheckUpFee');
        Route::put('ChangeFeeInstallmentOrder', 'InstallmentOrderController@ChangeFee');
        Route::post('TechManagerDeterminePrice', 'MaintenanceOrderController@TechManagerDeterminePrice');

        // message part
        Route::get('getAllMessageForAdmin', 'MessageController@getAllMessageForAdmin');

        //start of service


        //end of service


    });

});
