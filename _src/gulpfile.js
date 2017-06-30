var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');


var bundler = browserify({
  entries: './js/index.js',
  cache: {},
  packageCache: {}
});


function bundle(b) {
  return b
    .transform('brfs')
    .bundle()
    .on('error', function(err) {
      console.log(err.toString());
    })
    .pipe(source('battle.js'))
    .pipe(gulp.dest('../js/'));
}


gulp.task('js', function() {
  console.log("building js");
  return bundle(bundler);
});


gulp.task('watch', function() {
  console.log("watching js");
  var w = watchify(bundler);
  w.on('update', function() {
    console.log("updating");
    return bundle(w);
  });
  return bundle(w);
});
