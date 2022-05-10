<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkshopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workshops', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->string('name');
            $table->mediumText('description');
            $table->string('name_ar');
            $table->string('description_ar');
            $table->string('location');
            $table->unsignedInteger('type');
            $table->string('image');
            $table->boolean('is_booked')->default(0);
            $table->unsignedInteger('department_id');
            $table->unsignedInteger('branch_id');
            $table->foreign('department_id')->references('id')->on('departments');
            $table->foreign('branch_id')->references('id')->on('branches');
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
        Schema::dropIfExists('workshops');
    }
}
