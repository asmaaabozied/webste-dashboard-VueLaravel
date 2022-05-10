<?php

use App\WorkSchedule;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorkScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('work_schedules')->insert([
            [
                'day' => 'su',
                'from' => '8:00',
                'to' => '17:00',
                'day_off' => 0
            ], [
                'day' => 'mo',
                'from' => '8:00',
                'to' => '17:00',
                'day_off' => 0
            ], [
                'day' => 'tu',
                'from' => '8:00',
                'to' => '17:00',
                'day_off' => 0
            ], [
                'day' => 'we',
                'from' => '8:00',
                'to' => '17:00',
                'day_off' => 0
            ], [
                'day' => 'th',
                'from' => '8:00',
                'to' => '17:00',
                'day_off' => 0
            ], [
                'day' => 'fr',
                'from' => '8:00',
                'to' => '17:00',
                'day_off' => true
            ], [
                'day' => 'sa',
                'from' => '8:00',
                'to' => '17:00',
                'day_off' => true
            ],
        ]);
    }
}
