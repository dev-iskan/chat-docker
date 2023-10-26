<?php

use App\Http\Controllers\Chat\MessageController;
use App\Http\Controllers\Chat\UserController;
use Illuminate\Support\Facades\Route;

Route::post('me', [UserController::class, 'me']);
Route::get('users', [UserController::class, 'index']);

Route::post('messages', [MessageController::class, 'store']);
Route::get('messages', [MessageController::class, 'index']);

