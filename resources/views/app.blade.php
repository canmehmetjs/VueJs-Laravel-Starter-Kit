<!DOCTYPE html>
<html lang="en">
<head>
    <title>VueJs Laravel Starter Theme</title>
    <script src="/assets/js/core/pace.js"></script>
    <link href="{{mix("/assets/css/app.css")}}" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    
</head>
<body>
<div id="app">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</div>
<script type="text/javascript" src="{{mix('/assets/js/core/plugins.js')}}"></script>
<script type="text/javascript" src="{{mix("/assets/js/app.js")}}"></script>
</body>
</html>
