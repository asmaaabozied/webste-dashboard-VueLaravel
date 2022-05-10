<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class databaseRefresh extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:refresh';

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
        try {
//            if (File::exists(public_path('storage'))){
//                if (is_dir(public_path('storage'))){
//                    rmdir(public_path('storage'));
//                    $this->warn("deleted storage symlink from public directory");
//                }
//            }
//            system('sphp artisan torage:link');
//            $this->info('Successfully run command storage:link');


            $this->info('this will automatically create database with seeder and passport keys ,  please wait a minute (-__-)');

//            system('cphp artisan omposer dumpautoload');
//            $this->info('Successfully optimize composer');

            system('php artisan migrate:fresh  --seed');
            $this->info('Successfully run command migrate:fresh');
            system('php artisan passport:install');
            $this->info('Successfully run command passport:install');
            system('php artisan passport:keys');
            $this->info('Successfully run command passport:keys');

            system('php artisan cache:clear');
            $this->info('Successfully cache clear');

            system('php artisan config:clear');
            $this->info('Successfully cache clear');

            system('php artisan view:clear');
            $this->info('Successfully cache clear');


        }catch (\Exception $e){
            $this->error($e->getMessage());
        }
    }
}
