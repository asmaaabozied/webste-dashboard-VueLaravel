<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    protected $ApiNameSpaceV1 = 'App\Http\Controllers\Api\v1';
    protected $ApiNameSpaceV2 = 'App\Http\Controllers\Api\v2';


    /**
     * The path to the "home" route for your application.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        // our custom api ( v1 and v2 ) for load thuse api
        $this->mapApiRoutesV1();
        $this->mapApiRoutesV2();

        $this->mapApiRoutes();

        $this->mapWebRoutes();
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }

    // our custom api ( v1 and v2 )

    // for api v1 -> load route from this folder and controller will load from our custom name space config (ApiNameSpaceV1)
    protected function mapApiRoutesV1()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->ApiNameSpaceV1)
            ->group(base_path('routes/Api/v1/api.php'));
    }

    // for api v2 -> load route from this folder and controller will load from our custom name space config (ApiNameSpaceV2)
    protected function mapApiRoutesV2()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->ApiNameSpaceV2)
            ->group(base_path('routes/Api/v2/api.php'));
    }
}
