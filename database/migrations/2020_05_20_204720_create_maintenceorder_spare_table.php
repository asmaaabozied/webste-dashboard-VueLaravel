<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenceorderSpareTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maintenceorder_spare', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->integer('maintenceorder_id')->nullable();
            $table->integer('spare_id')->nullable();
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
        Schema::dropIfExists('maintenceorder_spare');
    }
}
