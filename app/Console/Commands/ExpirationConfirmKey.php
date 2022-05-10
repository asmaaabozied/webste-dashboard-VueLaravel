<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use http\Client\Curl\User;
use Illuminate\Console\Command;
use App\ConfirmationKey;
class ExpirationConfirmKey extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'expiration:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        ConfirmationKey::where('created_at' ,'<', Carbon::now()->subMinute(10)->toDateTimeString())->delete();
    }
}
