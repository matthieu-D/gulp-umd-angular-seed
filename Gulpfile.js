var gulp = require('gulp');
var karma = require('gulp-karma');

var testFiles = [
  'src/hello.js',
  'test/hello.js'
];

gulp.task('test', function() {
  // Be sure to return the stream
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    //.on('error', function(err) {
      //// Make sure failed tests cause gulp to exit non-zero
      //throw err;
    //});
});

gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
