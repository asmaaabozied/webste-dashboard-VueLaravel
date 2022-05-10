<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvertisementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advertisements', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('main_title');
            $table->string('main_title_ar');
            $table->string('image');
            $table->string('sub_title');
            $table->string('sub_title_ar');
            $table->mediumText('description');
            $table->mediumText('description_ar');
            $table->decimal('price' , 13 , 2);
            $table->boolean('isEnabled')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('advertisements');
    }
}
