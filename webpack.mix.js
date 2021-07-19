const mix = require('laravel-mix');

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
mix.styles([
    'resources/assets/plantilla/css/font-awesome.min.css',
    'resources/assets/plantilla/css/simple-line-icons.min.css',
    'resources/assets/plantilla/css/style.css',
    'resources/assets/plantilla/css/animate.css',
    'resources/assets/plantilla/css/hamburgers.min.css',
    'resources/assets/plantilla/css/select2.min.css',
    'resources/assets/plantilla/css/util.css',
    'resources/assets/plantilla/css/main.css',
    'resources/assets/plantilla/css/bootstrap.min.css',
    'resources/assets/plantilla/css/vue-select.css',
    'resources/assets/plantilla/css/flaticon.css',
    'resources/assets/plantilla/css/style1.css',
    'resources/assets/plantilla/css/owl.carousel.min.css'

], 'public/css/all.css')
.scripts([
    'resources/assets/plantilla/js/jquery.min.js',
    'resources/assets/plantilla/js/popper.min.js',
    'resources/assets/plantilla/js/bootstrap.min.js',
    'resources/assets/plantilla/js/Chart.min.js',
    'resources/assets/plantilla/js/pace.min.js',
    'resources/assets/plantilla/js/template.js',
    'resources/assets/plantilla/js/sweetalert2.all.min.js',
    'resources/assets/plantilla/js/select2.min.js',
    'resources/assets/plantilla/js/tilt.jquery.min.js',
    'resources/assets/plantilla/js/owl.carousel.min.js'

], 'public/js/all.js')
.js(['resources/js/app.js'], 'public/js/app.js');
