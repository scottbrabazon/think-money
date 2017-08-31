let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
// let minifyjs = require('gulp-js-minify');

gulp.task('sass',function(){
  return gulp.src(['scss/style.scss'])
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'))
});

gulp.task('watch-sass', function(){
	gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

// gulp.task('minify-js', function(){
  // gulp.src('jsdist/a.js')
    // .pipe(minifyjs())
    // .pipe(gulp.dest('./dist/'));
// });