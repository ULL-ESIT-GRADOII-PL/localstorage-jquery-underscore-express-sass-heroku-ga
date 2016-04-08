
var gulp = require('gulp'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify'),
		ghPages = require('gulp-gh-pages'),
		karma   = require('gulp-karma')
		del = require('del'),
		minifyHTML = require('gulp-minify-html'),
		minifyCSS  = require('gulp-minify-css');


//Tarea minify para meter las pruebas en la rama gh-pages
gulp.task('minify',function(){
			gulp.src('assets/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('minified/assets/js/'))

			gulp.src('test/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('minified/test/'))

			gulp.src('test/*.css')
			.pipe(minifyCSS({keepBreaks:true}))
			.pipe(gulp.dest('minified/test/'))

			gulp.src('test.html')
			.pipe(minifyHTML())
			.pipe(gulp.dest('minified/'))

			gulp.src('assets/css/*.css')
			.pipe(minifyCSS({keepBreaks:true}))
			.pipe(gulp.dest('minified/assets/css/'))
		});

gulp.task('clean', function(cb){
	del(['minified/*'],cb);
});


gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('deploy', function() {
     return gulp.src('./minified/**/*')
       .pipe(ghPages());
   });

gulp.task('default', ['minify','clean']);
