//'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

/*input destination*/
var SCSS_SRC = './src/Assets/scss/**/*.scss';
/*output destination */
var SCSS_DEST = './src/Assets/css';

//Complie SCSS

gulp.task('compile_scss', function(){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});
    /*a task to watch a change in SCSS */
    gulp.task('watch_scss', function(){
        gulp.watch(SCSS_SRC, ['compile_scss']);
    });

    /*run tasks */
    

gulp.task('default', ['watch_scss']);