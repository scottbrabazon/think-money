const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
};

exports.buildStyles = buildStyles;

exports.watch = function () {
  gulp.watch('scss/*.scss', gulp.series('buildStyles'));
};



