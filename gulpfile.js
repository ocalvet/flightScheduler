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
})
 
gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['less']);
    gulp.watch('index.html', ['tmp']);
})
 
gulp.task('default', ['less', 'tmp', 'webserver', 'watch']);