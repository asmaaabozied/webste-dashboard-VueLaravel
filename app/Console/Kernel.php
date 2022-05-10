<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Artisan;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\databaseRefresh::class,
        Commands\MakeApi::class,
        Commands\MakeResource::class,
        Commands\MakeDevPath::class,
        Commands\MakeCollection::class,
        Commands\ExpirationConfirmKey::class,
        Commands\DatabaseBackup::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            Artisan::call('expiration:run');
        })->everyTenMinutes();
        $schedule->call(function () {
            Artisan::call('db:backup');
        })->everySixHours();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
