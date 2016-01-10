var gulp = require('gulp');
var connect = require('gulp-connect');
 var less = require('gulp-less');
 
 // Setup a webserver
gulp.task('webserver', function() {
  var serverPort = process.env.FS_PORT || 8088;
  connect.server({
    port: serverPort,
    root: '.tmp',
    livereload: true
  });
  console.log('Webserver started on port: ' + serverPort);
});

gulp.task('less', function() {
  gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(connect.reload());
});

gulp.task('tmp', function() {
  gulp.src('index.html')
    .pipe(gulp.dest('.tmp'))
    .pipe(connect.reload());
});
 
gulp.task('app-js', function() {
  gulp.src('app/**/*.js')
    .pipe(gulp.dest('.tmp/app'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
    gulp.watch('index.html', ['tmp']);
    gulp.watch('app/*.js', ['app-js']);
});

gulp.task('copy-libs', function() {
  gulp.src([
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js'
    ])
    .pipe(gulp.dest('.tmp/lib'));
});

gulp.task('copy-partials', function() {
  gulp.src([
      'app/views/**/*'
    ])
    .pipe(gulp.dest('.tmp/views'));
});
 
gulp.task('default', ['less', 'tmp', 'app-js', 'copy-libs', 'copy-partials', 'webserver', 'watch']);