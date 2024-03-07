<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reviews', function(Blueprint $table) {
            $table->id();
            $table->string("date");
            $table->string("link");
            $table->integer("rating");
            $table->string('review_id');
            $table->longText('snippet');
            $table->string('username');
            $table->string('userlink');
            $table->integer('userreviews');
            $table->string('userthumbnail');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
