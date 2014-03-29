var gulp = require('gulp');
var karma = require('gulp-karma');
var wrap = require('gulp-wrap-umd');

var testFiles = [
  'src/scripts/requireJs/helloModule.js',
  'tests/requireJs/helloSpec.js',
  'src/scripts/umd/helloModule.js',
  'tests/umd/helloSpec.js'
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

gulp.task('umd', function(){
  gulp.src(['src/scripts/requireJs/helloModule.js'])
    .pipe(wrap({
      namespace: 'helloUmd'
     }))
    .pipe(gulp.dest('src/scripts/umd/'));
});

gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
