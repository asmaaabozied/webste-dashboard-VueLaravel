<?php

use Illuminate\Database\Seeder;
use App\gallery;
class GalleryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        gallery::create([
            'name' => 'mhd',
            'phone' => '0934534523',
            'location' => 'damas',
            'user_id' => '1',
        ]);
    }
}
