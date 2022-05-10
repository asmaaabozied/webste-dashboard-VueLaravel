<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaintenanceOrderFeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maintenance_order_fees', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->float('amount')->nullable();            
            
            $table->integer('maintenance_order_id')->nullable()->unsigned();
            $table->foreign('maintenance_order_id')->references('id')->on('installment_orders')->onDelete('cascade');

            $table->integer('Installment_order_id')->nullable()->unsigned();
            $table->foreign('Installment_order_id')->references('id')->on('maintenance_orders')->onDelete('cascade');

            $table->integer('fee_id')->unsigned();
            $table->foreign('fee_id')->references('id')->on('fees')->onDelete('cascade');


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
        Schema::dropIfExists('maintenance_order_fees');
    }
}
