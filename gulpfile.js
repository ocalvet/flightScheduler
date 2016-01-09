var gulp = require('gulp');
var connect = require('gulp-connect');
 
 // Setup a webserver
gulp.task('webserver', function() {
  var serverPort = process.env.FS_PORT || 8088;
  connect.server({
    port: serverPort
  });
  console.log('Webserver started on port: ' + serverPort);
});

gulp.task('default', ['webserver']);