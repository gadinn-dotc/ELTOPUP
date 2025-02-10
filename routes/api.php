<?php

use App\Http\Controllers\authController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rute yang bisa diakses tanpa autentikasi
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rute yang butuh autentikasi Sanctum
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Contoh rute lain yang butuh autentikasi
    Route::get('/profile', function (Request $request) {
        return response()->json(['user' => $request->user()]);
    });
});

