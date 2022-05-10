<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderSparePartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_spare_parts', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->unsignedInteger('quantity');
            $table->integer('spare_id')->unsigned();
            $table->foreign('spare_id')->references('id')->on('spare_parts')->onDelete('cascade');
            $table->unsignedInteger('maintenance_order_id');
            $table->foreign('maintenance_order_id')->references('id')->on('maintenance_orders');
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
        Schema::dropIfExists('order_spare_parts');
    }
}
