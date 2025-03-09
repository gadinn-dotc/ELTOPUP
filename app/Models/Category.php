<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['game_id', 'name']; // Kolom yang bisa diassign secara massal

    // Relasi ke model Game
    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    // Relasi ke model Price
    public function prices()
    {
        return $this->hasMany(Price::class);
    }
}
