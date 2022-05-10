<?php

use Illuminate\Database\Seeder;
use App\Customer;
class CustomerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        Customer::create([
            'name' => 'karam',
            'phone' => '0934534523',
            'location' => 'damas',
            'user_id' => '1',
        ]);
    }
}