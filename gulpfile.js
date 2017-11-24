'use strict';
 
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    path = require('path');

gulp.task('sass', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function(){
  return gulp.src('./src/fonts/**/*.*')
  .pipe(gulp.dest('dist/fonts'));
  });

gulp.task('img', function(){
  return gulp.src('./src/img/**/*.*')
  // .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'))
  });

gulp.task('html', function(){
    gulp.src('./dist/*.html')
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['sass', 'html', 'img'], function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
    browserSync.init({
        server: "./dist"
    });
});

gulp.task('default', ['watch'], function() {
    gulp.start('sass');
});
