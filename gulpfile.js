var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    styles = ['./sass/*.scss', './sass/**/*.scss'],
    html = ['./html/*.html'],
    styleOut = './';


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('compress', function () {
	gulp.src(['js/*.js', 'lib/*.js']) //what files do we want gulp to consume
	.pipe(eslint())
	.pipe(uglify())//call uglify
	.pipe(plumber())
	.pipe(rename({ extname: '.min.js'})) //rename the uglified file
	.pipe(gulp.dest('build'));//where do we put the result?
});



gulp.task('sass', function() {
   gulp.src(styles)
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest(styleOut))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest(styleOut));
});

gulp.task('watch', function() {
   gulp.watch(styles, ['sass']).on('change', browserSync.reload);
   gulp.watch(html, ['html']).on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'compress', 'browser-sync', 'sass']);