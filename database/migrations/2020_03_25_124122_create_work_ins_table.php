<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkInsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_ins', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->unsignedInteger('employee_id');
            $table->unsignedInteger('workshop_id');
            $table->foreign('workshop_id')->references('id')->on('workshops')->onDelete('cascade');
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');

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
        Schema::dropIfExists('work_ins');
    }
}
