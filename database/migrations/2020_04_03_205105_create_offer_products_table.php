<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfferProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_products', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->unsignedInteger('quantity');
            $table->unsignedInteger('offer_id');
            $table->foreign('offer_id')->references('id')->on('offers');
            $table->unsignedInteger('product_id');
            $table->foreign('product_id')->references('id')->on('products');
            $table->primary(['product_id', 'offer_id']);
 
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
        Schema::dropIfExists('offer_products');
    }
}
