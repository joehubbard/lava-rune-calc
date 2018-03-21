var gulp = require('gulp');
var sass = require('gulp-sass');
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('bundle', function ()
{
    return gulp.src('js/*.js')
        .pipe(amdOptimize("main",
            {
                name: "main",
                configFile: "./js/scripts.js",
                baseUrl: './js'
            }
        ))
        .pipe(concat('main-bundle.js'))
        .pipe(gulp.dest('dist/'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('js/*.js',['requirejsBuild']);
});
