<?php

use App\Http\Controllers\ProfileController;
use App\Models\Reviews;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route("home");
});

Route::get('/home', function () {
    // $query = [
    //     'engine' => 'google_maps_reviews',
    //     'place_id' => 'ChIJeRASX2PZhVQRj-sAXkL1YqU'
    // ]; 

    // $search = new GoogleSearchResults('dfae333e4f42d27ef6b36a190040cd2dc8426f5b8dace99657db79d0cb15cda0');
    // $result = $search->get_json($query);
    // $reviews = $result->reviews;
    // $pagination = $result->serpapi_pagination;
    // while ($pagination) {
    //     $query = [
    //         'engine' => 'google_maps_reviews',
    //         'place_id' => 'ChIJeRASX2PZhVQRj-sAXkL1YqU',
    //         'next_page_token' => $pagination->next_page_token
    //     ]; 
    
    //     $search = new GoogleSearchResults('dfae333e4f42d27ef6b36a190040cd2dc8426f5b8dace99657db79d0cb15cda0');
    //     $result = $search->get_json($query);
    //     $reviews = array_merge($reviews, $result->reviews);
    //     $pagination = property_exists( $result,'serpapi_pagination') ? $result->serpapi_pagination: NULL;
    // }

    // collect($reviews)->dump();
    // foreach($reviews as $review) {
    //     $revModel = new Reviews;
    //     $revModel->date = $review->date;
    //     $revModel->link = $review->link;
    //     $revModel->rating = $review->rating;
    //     $revModel->review_id = $review->review_id;
    //     $revModel->snippet = property_exists( $review,'snippet') ? $review->snippet: "";
    //     $revModel->username = $review->user->name;
    //     $revModel->userlink = $review->user->link;
    //     $revModel->userreviews = property_exists($review->user, "reviews") ? $review->user->reviews: -1;
    //     $revModel->userthumbnail = $review->user->thumbnail;
    //     $revModel->save();
    //     // DB::table('reviews')->where('id', $revModel->id)->update(['date' => DB::raw('?')],[$review->date]);
    //     // DB::table('reviews')->where('id', $revModel->id)->update(['link' => DB::raw('?')],[$review->link]);
    //     // DB::table('reviews')->where('id', $revModel->id)->update(['rating' => DB::raw('?')],[$review->rating]);
    //     // DB::table('reviews')->where('id', $revModel->id)->update(['review_id' => DB::raw('?')],[$review->review_id]);
    //     // // DB::table('reviews')->where('id', $revModel->id)->update(['snippet' => DB::raw('?')],[$review->snippet]);
    //     // DB::table('reviews')->where('id', $revModel->id)->update(['username' => DB::raw('?')],[$review->user->name]);
    //     // DB::table('reviews')->where('id', $revModel->id)->update(['userlink' => DB::raw('?')],[$review->user->link]);
    //     // // DB::table('reviews')->where('id', $revModel->id)->update(['userreviews' => DB::raw('?')],[$review->user->reviews]);
    //     // DB::table('reviews')->where('id', $revModel->id)->update(['userthumbnail' => DB::raw('?')],[$review->user->thumbnail]);
    //  }

    $reviewObj = Reviews::all();
    // $reviews = [];
    // Reviews::query()->delete();
    return Inertia::render('Home', [
        'reviews' => $reviewObj
    ]);
})->name("home");

Route::get('/tents', function () {
    return Inertia::render('Tents');
})->name('tents');

Route::get('/chairs', function () {
    return Inertia::render('Chairs');
})->name('chairs');

Route::get('/floors', function () {
    return Inertia::render('Floors');
})->name('floors');

Route::get('/miscellaneous', function () {
    return Inertia::render('Miscellaneous');
})->name('miscellaneous');

Route::get('/tables', function () {
    return Inertia::render('Tables');
})->name('tables');

Route::get('/FAQs', function () {
    return Inertia::render('Faq');
})->name('faq');

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');

Route::get('/secret', function () {
    return Inertia::render('React-Landing-Page-Template/src/App');
})->name('secret');

Route::get('/booking', function () {
    return Inertia::render('Booking');
})->name('booking');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
