<?php


use Illuminate\Support\Facades\Route;




Route::get('productCategory', 'ProductCategoryController@index');
Route::get('productCategory/{id}', 'ProductCategoryController@show');
Route::get('product', 'ProductController@index');
Route::get('product/{id}', 'ProductController@show');
// Route::resource('advertArea', 'AdvertisementController')->only('index');
Route::resource('department', 'DepartmentController')->only('index');



Route::group(['middleware' => ['auth:api']], function () {
    Route::group(['middleware' => ['VerificationCustomersAndGalleries' , 'Lang']], function () {

        Route::post('addProductToCart', 'CartProductController@addProductToCart');
        Route::put('UpdateProductsInCart', 'CartProductController@UpdateProductsInCart');
        Route::delete('removeProductFromCart', 'CartProductController@removeProductFromCart');
        Route::get('cart', 'CartProductController@index');

        Route::post('payTransectio/{id}', 'TransactionController@payTransectio');
        Route::get('GetTransactionDetils/{id}', 'TransactionController@GetTransactionDetils');


        Route::post('product', 'ProductController@store');
        Route::put('product/{id}', 'ProductController@update');
        Route::delete('product/{id}', 'ProductController@destroy');
        Route::post('productCategory', 'ProductCategoryController@store');
        Route::put('productCategory/{id}', 'ProductCategoryController@update');
        Route::delete('productCategory/{id}', 'ProductCategoryController@destroy');
        Route::resource('advertArea', 'AdvertisementController');
        Route::post('giveCar', 'EmployeeController@giveCar');
        Route::post('takeCar', 'EmployeeController@takeCar');


        // Route::resource('product', 'ProductController');
        Route::resource('cart', 'CartController');
        Route::get('getCart', 'CartProductController@index');
        Route::resource('cartProduct', 'CartProductController');
        Route::resource('offer', 'OfferController');
        Route::resource('offerProduct', 'OfferProductController');
        Route::resource('invoice', 'InvoiceController');
        Route::resource('delivery', 'DeliveryOrderController');
        Route::resource('transaction', 'TransactionController')->only(['index', 'show']);
        Route::get('GetAllTransaction', 'TransactionController@GetAllTransaction');
        Route::post('makeTransaction/product', 'TransactionController@makeProductTransaction');
        Route::post('makeTransaction/maintenanceOrder/{id}', 'TransactionController@makeMaintenanceOrderTransaction');
        Route::get('getAccounting', 'TransactionController@getAccounting');


        Route::resource('employee', 'EmployeeController');
        Route::resource('role', 'RoleInxController');

        Route::resource('department', 'DepartmentController')->except('index');
        Route::resource('sparePart', 'SparePartController');
        Route::resource('workshop', 'WorkshopController');
        Route::resource('emplployeeAlaret', 'EmployeeAlertController');
        Route::resource('workIn', 'WorkInController');
        Route::resource('orderSparePart', 'OrderSparePartController');

        Route::resource('branch', 'BranchController');
        Route::post('branch/getNearestLocation', 'BranchController@nearestLocation');

        Route::resource('appointment', 'AppointmentController');
        Route::post('appointment/reserveDate/{id}', 'AppointmentController@reserveDate');
        Route::get('appointment/getByBranch/{branchId}', 'AppointmentController@getByBranch');
        Route::post('appointment/cancelAppointment/{id}', 'AppointmentController@cancelAppointment');

        Route::get('getEmployeeWorkshops/{id}', 'EmployeeController@getWorkshops');
        Route::get('getDepartmentWorkshops/{id}', 'DepartmentController@getWorkshops');
        Route::get('getWorkshopEmployees/{id}', 'WorkshopController@getEmployees');


        // add and remove employee from order
        // order and employee
        Route::post('/addEmployeesToOrder', 'EmployeeController@addEmployeesToOrder');
        Route::delete('/deleteEmployeesFromOrder', 'EmployeeController@deleteEmployeesFromOrder');


    });
});
