<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    // Create Game
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $game = Game::create([
            'name' => $request->name
        ]);

        return response()->json($game, 201); // Response game yang baru dibuat
    }

    // Read Game (daftar semua game)
    public function index()
    {
        $games = Game::all();
        return response()->json($games);
    }

    // Update Game
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $game = Game::findOrFail($id);
        $game->name = $request->name;
        $game->save();

        return response()->json($game); // Response game yang sudah diupdate
    }

    // Delete Game
    public function destroy($id)
    {
        $game = Game::findOrFail($id);
        $game->delete();

        return response()->json(['message' => 'Game deleted successfully']);
    }
}
