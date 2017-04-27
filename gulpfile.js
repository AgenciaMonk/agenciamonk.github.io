const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uncss = require('gulp-uncss');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const zip = require('gulp-zip');
const responsive = require('gulp-responsive');
const load = require('gulp-load-plugins')();
const Pageres = require('pageres');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');

const components = ['./css/components/fonts.css', './css/components/colors.css', './css/components/flexalign.css', './css/components/buttons.css'];


// MINIFIC-IMGS
gulp.task('build-img', function(){
    gulp.src('img/**/*')
     .pipe(imagemin())
     .pipe(gulp.dest('img/test'));
})
// MINIFIC-IMGS

// UNCSS
gulp.task('un-css', function () {
    return gulp.src('css/css.css')
        .pipe(uncss({
            html: ['./**/*.html'],
            js: ['./**/*.js']
        }))
        .pipe(rename('final.css'))
        .pipe(gulp.dest('css/final'))
});
// UNCSS


// TOPTOPTOP
gulp.task('css', function(){
   gulp.src('css/*.css')
   .pipe(uncss({
       html: ['./**/*.html'],
       js: ['./**/*.js']
   }))
   .pipe(cleanCSS({debug: true}, function(details) {
       console.log(details.name + ': ' + details.stats.originalSize);
       console.log(details.name + ': ' + details.stats.minifiedSize);
   }))
   .pipe(concat('master.min.css'))
   .pipe(gulp.dest('css'));
});
// TOPTOPTOP

// SCREENSHOT
gulp.task('pg', function(){
  const pageres = new Pageres({delay: 2})
	.src('agenciamonk.github.io', ['480x320', '1024x768', 'iphone 5s'])
  .dest('prints')
	.run()
	.then(() => console.log('done'));
});
// SCREENSHOT

// ZIP-ARCHIVES
gulp.task('zizp', function(){
  gulp.src('./css/components/*.css')
     .pipe(concat('all.css'))
     .pipe(gulp.dest('download/test/'))

	// gulp.src('./img/*')
	// 	.pipe(zip('archive.zip'))
	// 	.pipe(gulp.dest('download'))
});
//ZIP-ARCHIVES





gulp.task('copile-css', function() {
  return gulp.src(components)
    .pipe(concat('monk-framework.css'))
    .pipe(gulp.dest('./download'));
});

gulp.task('copile-css-min', function() {
  return gulp.src(components)
    .pipe(concat('monk-framework.min.css'))
    .pipe(cleanCSS({debug: true}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('./download'));
});

gulp.task('zip-css', function(){
	gulp.src('./download/*.css')
		.pipe(zip('monk-framework.zip'))
		.pipe(gulp.dest('./download'))
});


gulp.task('copile', function(callback) {
    runSequence('copile-css','copile-css-min', ['zip-css'], callback);
});
