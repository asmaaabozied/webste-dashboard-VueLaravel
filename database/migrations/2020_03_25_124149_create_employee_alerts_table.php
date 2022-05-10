<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeAlertsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_alerts', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->unsignedInteger('emp_id');;
            $table->foreign('emp_id')->references('id')->on('employees'); 
            $table->longText('text');
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
        Schema::dropIfExists('employee_alerts');
    }
}
