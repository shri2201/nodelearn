'use strict;'
var jshint = require('gulp-jshint');
var gulp = require('gulp');
var debug = require('gulp-debug');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

gulp.task('default', function(){ console.log('Hello me!!') }
	);

gulp.task('lint', function() {
	return gulp.src('**/*.js')
	       .pipe(jshint())
	       .pipe(jshint.reporter('default', { verbose: true }));
	       
});
 
gulp.task('compress', function() {
  return gulp.src('**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: "Javascript is now ugly!"})
    );
});
