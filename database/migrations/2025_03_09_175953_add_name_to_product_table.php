<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->foreignId('category_id')->constrained('categories'); // Relasi dengan kategori
        $table->string('name'); // Nama produk/top-up (misal: 500 Diamonds, 1000 Diamonds)
        $table->integer('amount'); // Jumlah produk/top-up (misal: 500 Diamonds, 1000 Diamonds)
        $table->decimal('price', 10, 2); // Harga dalam rupiah
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product', function (Blueprint $table) {
            //
        });
    }
};
