'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('img', function(){
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./dist/img'))
});

gulp.task('watch', ['sass', 'img'], function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/scss/*.scss', ['sass']);
    browserSync.init({
        server: "./dist"
    });
});

gulp.task('html', function(){
    gulp.src('./dist/*.html')
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['watch'], function() {
    gulp.start('sass');
});

