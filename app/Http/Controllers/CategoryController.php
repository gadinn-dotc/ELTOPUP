<?php

// Controller: CategoryController.php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // Menambahkan kategori
    public function store(Request $request)
    {
        $request->validate([
            'game_id' => 'required|exists:games,id',
            'name' => 'required|string|max:255',
        ]);

        $category = Category::create([
            'game_id' => $request->game_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Kategori berhasil ditambahkan',
            'category' => $category,
        ], 201);
    }

    // Menampilkan semua kategori
    public function index()
    {
        $categories = Category::with('game')->get(); // Ambil kategori beserta game yang terkait
        return response()->json($categories);
    }

    // Mengupdate kategori
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        
        $category->update([
            'game_id' => $request->game_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'message' => 'Kategori berhasil diperbarui',
            'category' => $category,
        ]);
    }

    // Menghapus kategori
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json(['message' => 'Kategori berhasil dihapus']);
    }
}
