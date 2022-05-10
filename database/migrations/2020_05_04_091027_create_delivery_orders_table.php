<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_orders', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');  
            $table->unsignedInteger('transaction_id');
            $table->foreign('transaction_id')->references('id')->on('transactions');
            $table->date('delivery_date');
            $table->string('location');
            $table->decimal('price' ,13,2);

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
        Schema::dropIfExists('delivery_orders');
    }
}
