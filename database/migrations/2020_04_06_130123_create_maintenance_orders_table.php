<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenanceOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maintenance_orders', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->integer('device_type');
            $table->string('manufacture');
            $table->string('location');
            $table->string('description');
            $table->string('reason_restart')->nullable();
            $table->string('warranty_image')->nullable();
            $table->integer('warranty_type')->default('0');
            $table->integer('fix_place')->default('0');
            $table->boolean('need_spare_part')->default('0');
            $table->boolean('has_image')->default('0');

            $table->integer('order_id')->unsigned()->nullable();
            $table->integer('appointment_id')->unsigned()->nullable();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->foreign('appointment_id')->references('id')->on('appointments');
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
        Schema::dropIfExists('maintenance_orders');
    }
}
