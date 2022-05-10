<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Orders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->integer('status')->default('0');
            $table->integer('technical_status')->nullable();
            $table->decimal('price', 13, 2)->default('0');
            $table->integer('payment_method')->default('0');
            $table->mediumText('rejected_desc')->nullable();
            $table->text('reason')->nullable();
            $table->text('technical_reason')->nullable();
            $table->string('type')->nullable();
            //
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            //
            $table->integer('employee_id')->nullable()->unsigned();
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            //
            $table->integer('discount_code_id')->nullable()->unsigned();
            $table->foreign('discount_code_id')->references('id')->on('discount_codes')->onDelete('cascade');

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
        Schema::dropIfExists('orders');
    }
}
