const mix = require('laravel-mix').mix;
// const imagemin = require('imagemin');
// const imageminJpegtran = require('imagemin-jpegtran');
// const imageminPngquant = require('imagemin-pngquant');
//
// const themePath = 'web/app/themes/carsnip';
//
// mix.setPublicPath('public/assets');
// mix.setResourceRoot('public/assets');
//
// imagemin(['assets-src/images/*.{jpg,png,svg,gif}'], 'public/assets/images', {
//   plugins: [
//     imageminJpegtran(),
//     imageminPngquant({quality: '65-80'})
//   ]
// }).then(files => {
//   console.log(files);
//   //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
// });
//
// imagemin(['assets-src/images/icons/*.{jpg,png,svg,gif}'], 'public/assets/images/icons', {
//   plugins: [
//     imageminJpegtran(),
//     imageminPngquant({quality: '65-80'})
//   ]
// }).then(files => {
//   console.log(files);
//   //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
// });

mix.scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'js/*.js',
], 'dist/main.min.js');

mix.sass('scss/main.scss', 'css/main.css')
  .options({
    processCssUrls: false
  });

// // Hash and version files in production.
// if (mix.config.inProduction) {
//   mix.version();
// }
