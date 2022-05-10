<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

/**
 * Class UserTableSedder
 * @author karam mustafa
 */
class UserTableSedder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arr = [
            'بليغ' => 'sales_manager',
            'يوسف احمد' => 'maintenance_manager',
            'محمد بدر' => 'maintenance_manager',
            'محمد اسماعيل' => 'technical',
            'سامي' => 'technical',
            'امير' => 'technical',
            'راهول' => 'technical',
            'بارفين' => 'technical',
            'فيصل' => 'technical',
            'عادل' => 'technical',
            'فريد' => 'technical',
            'سافدار' => 'technical',
            'ايجاز' => 'technical',
            'سجاد' => 'technical',
            'manager' => 'system_manager',
            'admin' => 'admin',
            'maintenance' => 'maintenance_manager',
            'installation' => 'installation_manager',
            'technical_manager' => 'technical_manager',
            'technical' => 'technical',
            'consulting' => 'consulting_manager',
            'consulting_emp' => 'consulting_employee',
            'hr' => 'hr_manager',
            'sales' => 'sales_manager',
            'customer' => 'customer',
            'gallery' => 'gallery',
            //
        ];
        foreach ($arr as $index => $item) {
            $extraUser = User::create([
                'user_name' => $index,
                'password' => "$index@123123",
                'role' => $item,
                'is_verified' => 1,
            ]);
            if (!in_array($extraUser->role, ['customer', 'gallery'])) {
                $data = [
                    'id' => $extraUser->id,
                    'name' => $index,
                    'phone' => '0096659300' . rand(123374409, 2),
                    'id_number' => rand(123374409, 2),
                    'nationality' => 'sy',
                    'image' => 'test.jpg'
                ];
                if (in_array($extraUser->role, \App\Helpers\managerOrderRole())) {
                    $data += [
                        "department_id" => \App\Department::where(
                                'name', \App\Helpers\managerAndDepartment()[$extraUser->role] ?? null
                            )->first()->id ?? null
                    ];
                }
                \App\Employee::create($data);
            }
            $extraUser->attachRole($item);
            if ($item == 'customer') {
                \App\Customer::create([
                    'name' => 'test',
                    'phone' => '0096659300' . rand(123374409, 2),
                    'location' => json_encode([
                        "lat" => 35.13242134,
                        "lon" => 35.54,
                    ]),
                    'user_id' => $extraUser->id,
                ]);
            } else if ($item == 'gallery') {
                \App\gallery::create([
                    'name' => 'test',
                    'phone' => '0096659300' . rand(123374409, 2),
                    'location' => json_encode([
                        "lat" => 35.13242134,
                        "lon" => 35.54,
                    ]),
                    'user_id' => $extraUser->id,
                ]);
            }
        }
    }
}
