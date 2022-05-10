<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class MakeDevPath extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'DevPath {version} {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this will create controller,model,migration,resource and request for api2';

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
        Artisan::call("api:v {$this->argument('version')}  {$this->argument('name')}");
        $this->line('add controller successfully');
        Artisan::call("make:request {$this->argument('name')}Request");
        $this->line('add Request successfully');
        Artisan::call("resource:v {$this->argument('version')} {$this->argument('name')}");
        $this->line('add Resource successfully');
        Artisan::call("make:model {$this->argument('name')} -m");
        $this->line('add model and migration successfully');

//        $useFile =
//            [
//                "use App\Http\Controllers\BaseController;",
//                "use App\Http\Requests\\{$this->argument('name')}Request;",
//                "use App\Http\Resources\Api\\v2\\{$this->argument('name')}Resource;",
//                "use App\\{$this->argument('name')};",
//                "class {$this->argument('name')}Controller extends BaseController",
//            ];
//        for ($i=3; $i < 8; $i++){
//            $controller = app_path("Http/Controllers/Api/v2/{$this->argument('name')}Controller.php");
//            $my_array = file( $controller );
//            $my_array[$i] = $useFile[$i - 3] . "\n";
//            file_put_contents( $controller,implode( "",$my_array ) );
//        }


    }
}
