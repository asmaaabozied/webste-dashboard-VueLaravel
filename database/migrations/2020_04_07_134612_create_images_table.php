<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->string('image');

            $table->integer('user_id')->nullable()->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->integer('order_id')->nullable()->unsigned();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');

            $table->integer('maintenance_order_id')->nullable()->unsigned();
            $table->foreign('maintenance_order_id')->references('id')->on('maintenance_orders')->onDelete('cascade');

            $table->integer('message_id')->nullable()->unsigned();
            $table->foreign('message_id')->references('id')->on('messages')->onDelete('cascade');
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
        Schema::dropIfExists('images');
    }
}
