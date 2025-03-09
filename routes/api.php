<?php

use App\Http\Controllers\authController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;

// CRUD Routes untuk Game
Route::apiResource('games', GameController::class);


// Rute yang bisa diakses tanpa autentikasi
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rute yang butuh autentikasi Sanctum
Route::middleware('auth:sanctum')->group(function () {
    Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
    
    // Contoh rute lain yang butuh autentikasi
    Route::get('/profile', function (Request $request) {
        return response()->json(['user' => $request->user()]);
    });
});

// Game routes
