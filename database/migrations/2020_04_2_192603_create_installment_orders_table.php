<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstallmentOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('installment_orders', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->string('name');
            $table->bigInteger('phone');
            $table->longText('location');
            $table->integer('manufacturer')->nullable();
            $table->string('reason_restart')->nullable();
            $table->longText('item')->nullable();
            $table->integer('device_type');
            $table->integer('type');
            $table->integer('order_id')->unsigned();
            $table->integer('appointment_id')->unsigned()->nullable();
            $table->foreign('appointment_id')->references('id')->on('appointments');
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
        Schema::dropIfExists('installment_orders');
    }
}
