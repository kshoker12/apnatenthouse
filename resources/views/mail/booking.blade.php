<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    </head>
    <body class="font-sans antialiased">
        <div class="">
            <div class="">
                <strong>Name:</strong> {{$information['firstname']}} {{$information['lastname']}}
            </div>
            <div class="">
                <strong>Email:</strong> {{$information["email"]}}
            </div>
            <div class="">
                <strong>Phone:</strong> {{$information["phone"]}}
            </div>
            <div class="">
                <strong>Preferred Contact Method:</strong> {{$information["preferred"]}}
            </div>
            <div class="">
                <strong>Address:</strong> {{$information["address"]}}
            </div>
            <div class="">
                <strong>Date</strong> {{$information["date"]}}
            </div>
            <div class="">
                <strong>Yard:</strong> {{$information["yard"]}}
            </div>
            <div class="">
                <strong>Additional Info:</strong> {{$information["additional"]}}
            </div>
            <div class="">
                <strong>Protection Plan:</strong> {{$information["protection"]}}
            </div>
            <div class="">
                <strong>Setup Fee:</strong> {{$information["setup"]}}
            </div>
            <div class="">
                <strong>Total Estimated Cost:</strong> ${{$information["totalCost"]}}
            </div>
        </div>
        <br>
        <br>
        <div class="">
            <div class="">
                <h5>Items</h5>    
            </div>
            <div class="">
                <ul>
                    @foreach ($information["itemsList"] as $item)
                        @if($item["breakdown"])
                            <li>{{$item["name"]}} - Qty {{$item["quantity"]}} : Breakdown ({{$item["breakdown"]}})</li>
                        @else
                            <li>{{$item["name"]}} - Qty {{$item["quantity"]}}</li>
                        @endif
                    @endforeach
                </ul>
            </div>
        </div>
    </body>
</html>