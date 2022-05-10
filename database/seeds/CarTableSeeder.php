<?php

use Illuminate\Database\Seeder;

class CarTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arr = [
            '2599 DBB' =>'نيسان باص 2014',
            '4688 DBB' =>'نيسان باص 2014',
            '4689 DBB' =>'نيسان باص 2014',
            '4695 DBB' =>'نيسان باص 2014',
        ];
        foreach ($arr as $number => $type){
            \App\car::create([
                'car_kind' =>$type,
                'palette_number' =>$number,
            ]);
        }
    }
}
