<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    // Menambahkan kolom yang bisa diassign secara massal
    protected $fillable = ['name'];
}
