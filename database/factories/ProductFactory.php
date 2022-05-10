<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'name_ar' => $faker->name,
        'model_code'=>rand(),
        'description' => $faker->sentence(6),
        'description_ar' => $faker->sentence(6),
        'quantity' => 10,
        'category_id' => 1,
        'price' => 100,
        'offer' => ['type' => 'amount', 'value' => 10],
        'image'=>''
    ];
});
