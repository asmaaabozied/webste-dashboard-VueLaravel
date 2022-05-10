<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->Increments('id');

            $table->integer('department_id')->unsigned()->nullable();
            $table->foreign('department_id')->references("id")->on('departments')->onDelete('cascade');

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references("id")->on('users')->onDelete('cascade');
            $table->text('text');
            $table->boolean('has_images');
            $table->timestamps();
        });
        Schema::table('messages', function(Blueprint $table)
        {
            $table->integer('response_message_id')->nullable()->unsigned();
            $table->foreign('response_message_id')->references("id")->on('messages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
