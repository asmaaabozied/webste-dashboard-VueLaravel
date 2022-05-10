<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


/**
 * Class SparePartTableSeeder
 * @author karam mustafa
 */
class SparePartTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try{
            // app_path('../sparepart.csv')
            // there is duplicate code
            $data = [];
            $file = file(app_path('../sparepart.CSV'));
            foreach ($file as $index => $line) {
                if($index != 0){
                    $finalLine = str_getcsv($line, ';');
                    $data[$index - 1]['price'] = $finalLine[0];
                    $data[$index - 1]['code'] = (String)$finalLine[1];
                    $data[$index - 1]['name'] = (String)$finalLine[2];
                    $data[$index - 1]['name_ar'] = (String)$finalLine[2];
                    $data[$index - 1]['manufacturer'] = (String)"manufacturer";
                }
            }
            foreach ($data as $item){
                \App\SparePart::create($item);
            }        }catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }
    }
}
