<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LaratrustSeeder::class);
        $this->call(DepartmentTableSeeder::class);
        $this->call(UserTableSedder::class);
//        $this->call(CustomerTableSeeder::class);
//        $this->call(GalleryTableSeeder::class);
        $this->call(WorkScheduleSeeder::class);
        $this->call(CarTableSeeder::class);
        $this->call(FeeTableSeeder::class);
        $this->call(SparePartTableSeeder::class);
        $this->call(ProductTableSeeder::class);
    }
}
