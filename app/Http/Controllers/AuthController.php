<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class authController extends Controller
{
    public function register(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'nama_lengkap' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'nomor_telepon' => 'required|string|max:15',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Buat user baru
        $user = User::create([
            'nama_lengkap' => $request->nama_lengkap,
            'username' => $request->username,
            'email' => $request->email,
            'nomor_telepon' => $request->nomor_telepon,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    }

    public function login(Request $request)
{
    $request->validate([
        'username' => 'required',
        'password' => 'required'
    ]);

    $user = User::where('username', $request->username)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json([
            'message' => 'Username atau password salah'
        ], 401);
    }

    // Buat token Sanctum
    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Berhasil login!',
        'token' => $token,
        'user' => $user
    ]);
}

public function logout(Request $request)
{
    $request->user()->tokens()->delete(); // Hapus semua token user

    return response()->json([
        'message' => 'Berhasil logout!'
    ]);
}

public function changePassword(Request $request)
{
    $request->validate([
        'current_password' => 'required',
        'new_password' => 'required|min:6',
        'new_password_confirmation' => 'required|same:new_password',
    ]);

    $user = $request->user();

    // Cek apakah password lama benar
    if (!Hash::check($request->current_password, $user->password)) {
        throw ValidationException::withMessages([
            'current_password' => ['Password lama salah.']
        ]);
    }

    // Simpan password baru
    $user->password = Hash::make($request->new_password);
    $user->save();

    return response()->json([
        'message' => 'Password berhasil diubah!'
    ]);
}


public function updateProfile(Request $request)
{
    $user = $request->user(); // User yang sedang login

    // Validasi data umum
    $request->validate([
        'nama_lengkap' => 'required|string|max:255',
        'username' => 'required|string|max:255|unique:users,username,' . $user->id,
        'email' => 'required|email|unique:users,email,' . $user->id,
    ]);

    // Kalau user mau ganti password, validasi dan proses
    if ($request->filled('current_password') || $request->filled('new_password') || $request->filled('confirm_password')) {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6',
            'confirm_password' => 'required|same:new_password',
        ]);

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'message' => 'Password lama salah.'
            ], 422);
        }

        $user->password = Hash::make($request->new_password);
    }

    // Update profil
    $user->nama_lengkap = $request->nama_lengkap;
    $user->username = $request->username;
    $user->email = $request->email;
    $user->save();

    return response()->json([
        'message' => 'Profil berhasil diperbarui',
        'user' => $user
    ]);
}

    
};



