<?php

use Illuminate\Database\Seeder;

class DepartmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $department = [
            'maintenance' => 'صيانة', // 1
            'installation' => 'تركيب', // 2
            'consulting'=> 'استشارة', // 3
            'technical' => 'تقني', // 4
            'hr' => 'موارد بشرية', // 5
            'sales'=>'مبيعات', // 6
        ];
        foreach ($department as $index=>$item){
            \App\Department::create([
                'name' => $index,
                'name_ar' => $item,
                'description' => "test".rand(1234,4),
                'description_ar' => "test".rand(1234,4),
                'image' => 'test.png',
            ]);
        }
    }
}
