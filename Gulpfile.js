var gulp = require('gulp');
var karma = require('gulp-karma');
var wrap = require('gulp-wrap-umd');

var testFiles = [
  'src/scripts/requireJs/helloModule.js',
  'tests/requireJs/helloSpec.js'
];

gulp.task('test', function() {
  // Be sure to return the stream
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
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
