<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
use App\Models\Reviews;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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
    //  }

    $reviewObj = Reviews::all();
    $sessionData = session("statusData");
    // $reviews = [];
    // Reviews::query()->delete();
    return Inertia::render('Home', [
        'reviews' => $reviewObj,
        'status' => $sessionData
    ]);
})->name("home");

Route::get('/tents', function () {
    return Inertia::render('Tents');
})->name('tents');

Route::get("/update/{passcode}", function($passcode) {
    if ($passcode === "Angad1234$") {
        $reviews = [];
        Reviews::query()->delete();    

        $query = [
            'engine' => 'google_maps_reviews',
            'place_id' => 'ChIJeRASX2PZhVQRj-sAXkL1YqU'
        ]; 

        $search = new GoogleSearchResults('dfae333e4f42d27ef6b36a190040cd2dc8426f5b8dace99657db79d0cb15cda0');
        $result = $search->get_json($query);
        $reviews = $result->reviews;
        $pagination = $result->serpapi_pagination;
        while ($pagination) {
            $query = [
                'engine' => 'google_maps_reviews',
                'place_id' => 'ChIJeRASX2PZhVQRj-sAXkL1YqU',
                'next_page_token' => $pagination->next_page_token
            ]; 

            $search = new GoogleSearchResults('dfae333e4f42d27ef6b36a190040cd2dc8426f5b8dace99657db79d0cb15cda0');
            $result = $search->get_json($query);

            $reviews = array_merge($reviews, $result->reviews);
            $pagination = property_exists( $result,'serpapi_pagination') ? $result->serpapi_pagination: NULL;
        }

        collect($reviews)->dump();
        foreach($reviews as $review) {
            $revModel = new Reviews;
            $revModel->date = $review->date;
            $revModel->link = $review->link;
            $revModel->rating = $review->rating;
            $revModel->review_id = $review->review_id;
            $revModel->snippet = property_exists( $review,'snippet') ? $review->snippet: "";
            $revModel->username = $review->user->name;
            $revModel->userlink = $review->user->link;
            $revModel->userreviews = property_exists($review->user, "reviews") ? $review->user->reviews: -1;
            $revModel->userthumbnail = $review->user->thumbnail;
            $revModel->save();
        }

    }
    return redirect()->route("home");
});

Route::get('/chairs', function () {
    return Inertia::render('Chairs');
})->name('chairs');

Route::get('/floors', function () {
    return Inertia::render('Floors');
})->name('floors');

Route::get('/addons', function () {
    return Inertia::render('Miscellaneous');
})->name('addons');

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
    $sessionData = session("data");
    session()->flash("data", $sessionData);
    return Inertia::render('Booking', [
        'data' => json_decode($sessionData)
    ]);
})->name('booking');

Route::get('/booking-form', function () {
    $sessionData = session("data");
    session()->flash("data", $sessionData);
    return Inertia::render('BookingForm', [
        'routeData' => json_decode($sessionData)
    ]);
})->name('bookingForm');

Route::post('/booking-submit', [BookingController::class, 'bookingRequest'])->name('bookingSubmit');

Route::post("/booking-final", [BookingController::class, 'bookingFinal'])->name('bookingFinal');

Route::post("/booking-back", [BookingController::class, 'bookingBack'])->name('bookingBack');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Mail:to("email")->send(new BookingRequest());

require __DIR__.'/auth.php';
