<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');
            $table->string('model_code')->unique()->nullable();
            $table->string('name')->nullable();
            $table->mediumText('description')->nullable();
            $table->string('name_ar')->nullable();
            $table->string('description_ar')->nullable();
            $table->unsignedBigInteger('quantity')->nullable();
            $table->unsignedInteger('product_category_id')->nullable();
            $table->foreign('product_category_id')->references('id')->on('product_categories');
            $table->string('image')->nullable();
            $table->unsignedInteger('offerType')->nullable();
            $table->unsignedInteger('offer_rateOrAmount')->nullable();
            $table->decimal('price',20,2)->nullable();
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
        Schema::dropIfExists('products');
    }
}
