<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::statamic('/feed/news', 'feed/feed', [
    'layout' => null,
    'content_type' => 'application/xml',
]);

// The Search route to display search results with `views/search.antlers.html`.
Route::statamic('/search', 'search');

