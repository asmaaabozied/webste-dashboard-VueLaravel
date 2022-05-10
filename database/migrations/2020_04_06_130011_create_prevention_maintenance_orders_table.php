<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreventionMaintenanceOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prevention_maintenance_orders', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->string('business_name');
            $table->string('business_phone_number');
            $table->string('business_location');
            $table->string('business_type');
            $table->string('maintenance_type');
            $table->integer('order_id')->unsigned();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
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
        Schema::dropIfExists('prevention_maintenance_orders');
    }
}
