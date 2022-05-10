<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
{{-- please dont replace asset to mix  --}}
<!-- icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/ico/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <link rel="manifest" href="/ico/site.webmanifest">
    <!-- <script data-ad-client="ca-pub-6228331858619461" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
</head>

<body>

<div id="app">
    <app></app>
</div>

<script src="{{ asset('js/app.js?v='.time()) }}"></script>

</body>

</html>
