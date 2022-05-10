<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->unsignedInteger('cart_id')->nullable();
            $table->foreign('cart_id')->references('id')->on('carts');
            $table->unsignedInteger('discount_code_id')->nullable();
            $table->foreign('discount_code_id')->references('id')->on('discount_codes');

            $table->integer('Installment_order_id')->nullable()->unsigned();
            $table->foreign('Installment_order_id')->references('id')->on('installment_orders');
            
            $table->integer('maintenance_order_id')->nullable()->unsigned();
            $table->foreign('maintenance_order_id')->references('id')->on('maintenance_orders');

            $table->integer('user_id')->nullable()->unsigned();
            $table->foreign('user_id')->references('id')->on('users');

            $table->decimal('price', 13, 2);
            $table->decimal('amount', 13, 2);

            $table->boolean('is_payed_transaction')->default('0');
            $table->longText('payed_info')->nullable();
            $table->bigInteger('payment_id')->nullable()->index();

            $table->unsignedInteger('payment_method')->default('0');
            $table->unsignedInteger('delivery_method')->default('0');
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
        Schema::dropIfExists('transactions');
    }
}
