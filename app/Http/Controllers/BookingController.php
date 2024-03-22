<?php

namespace App\Http\Controllers;

use App\Mail\BookingEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{
    public function bookingRequest(Request $request) {
        session()->flash("data", json_encode($request->data));
        return redirect()->route("bookingForm");
    }

    public function bookingFinal(Request $request) {
        Mail::to($request->information['email'])->send(new BookingEmail($request->information));
        session()->flash("status", "Your request was successfully sent. We will get back to you shortly");
        session()->flash("data", "");
        return redirect()->route("home");
    }
}
