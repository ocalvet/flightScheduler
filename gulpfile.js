var gulp = require('gulp');
var connect = require('gulp-connect');
 var less = require('gulp-less');
 
 // Setup a webserver
gulp.task('webserver', function() {
  var serverPort = process.env.FS_PORT || 8088;
  connect.server({
    port: serverPort,
    root: '.tmp',
    fallback: 'index.html',
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
    .pipe(gulp.dest('.tmp/index.html'))
    .pipe(connect.reload());
});
 
gulp.task('app-js', function() {
  gulp.src('app/*.js')
    .pipe(gulp.dest('.tmp/app'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
    gulp.watch('index.html', ['tmp']);
    gulp.watch('app/*.js', ['app-js']);
});

gulp.task('copy-libs', function() {
  gulp.src('node_modules/angular/angular.js')
    .pipe(gulp.dest('.tmp/lib'));
});
 
gulp.task('default', ['less', 'tmp', 'app-js', 'copy-libs', 'webserver', 'watch']);