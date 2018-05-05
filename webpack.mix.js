const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Do not Autoload Jquery as we're already including it via `plugins.js`
mix.autoload({})

var pluginPath =  'resources/assets/plugins/';

mix.combine([
    // ** Required Plugins **
    pluginPath + 'jquery/jquery.js'
],'public/assets/js/core/plugins.js')

.js('resources/assets/js/app.js','public/assets/js/')

.sass('resources/assets/sass/app.scss', 'public/assets/css/')

// .version();


