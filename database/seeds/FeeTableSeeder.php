<?php

use Illuminate\Database\Seeder;

/**
 * Class FeeTableSeeder
 * @author karam mustafa
 */
class FeeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try{
            $data = [
                [
                    'name' => 'customer visits cost',
                    'description' => 'customer visits cost',
                    'name_ar' => 'سعر الزيارة الى العميل',
                    'description_ar' => 'سعر الزيارة الى العميل',
                ],
                [
                    'name' => 'fee for work',
                    'description' => 'fee for work',
                    'name_ar' => 'اجرة اليد',
                    'description_ar' => 'اجرة اليد',
                ],
            ];
            foreach ($data as $item){
                \App\Fee::create($item);
            }
        }catch (\Exception $e) {
            self::throwException(__CLASS__, __LINE__, $e);
        }

    }
}
