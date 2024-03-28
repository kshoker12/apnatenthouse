<?php

namespace App\Http\Controllers;

use App\Mail\BookingEmail;
use App\Mail\ConfirmMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function bookingRequest(Request $request) {
        session()->flash("data", json_encode($request->data));
        return redirect()->route("bookingForm");
    }

    public function bookingFinal(Request $request) {
        // Mail::to("apnatentandpartyrentals@gmail.com")->send(new BookingEmail($request->information));
        Mail::to("karandeep.shoker@outlook.com")->send(new BookingEmail($request->information));
        Mail::to($request->information['email'])->send(new ConfirmMail($request->information));
        session()->flash("data", "");
        session()->flash("statusData", "Your request was successfully sent. We will get back to you shortly");
        return redirect()->route("home");
    }

    public function bookingBack(Request $request) {
        session()->flash("data", json_encode($request->data));
        return redirect()->route("booking");
    }
}
