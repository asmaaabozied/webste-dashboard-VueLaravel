<?php

use Illuminate\Database\Seeder;

/**
 * Class ProductTableSeeder
 * @author karam mustafa
 */
class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name_ar' => 'مكيف سبليت'],
            ['name_ar' => 'مكيف شباك'],
            ['name_ar' => 'مكيف دولابي'],
            ['name_ar' => 'مكيف كاسيت'],
            ['name_ar' => 'غسالة عادية'],
            ['name_ar' => 'غسالة اوتوماتيك'],
            ['name_ar' => 'ثلاجة'],
            ['name_ar' => 'فريزر'],
            ['name_ar' => 'مكنسة'],
            ['name_ar' => 'براد مياه'],
            ['name_ar' => 'شاشة تلفزيون'],
            ['name_ar' => 'فرن'],
            ['name_ar' => 'ميكروويف'],
            ['name_ar' => 'نشاف'],
        ];
        foreach ($data as $item) {
            $item['name'] = $item['name_ar'];
            $item['description'] = 'description';
            $item['description_ar'] = 'وصف المنتج';
            $item['price'] = 1;
            $item['image'] = 'test.png';
            \App\Product::create($item);
        }
    }
}
