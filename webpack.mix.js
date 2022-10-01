let mix = require('laravel-mix');

mix.sass('scss/app.scss', 'dist')

.options({
    hmrOptions: {
        host: '127.0.0.1',
        port: 8080
    }
})