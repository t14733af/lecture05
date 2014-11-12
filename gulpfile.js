var gulp = require("gulp");
var connect = require("gulp-connect");

// connect: it runs a web server.
gulp.task("connect", function() {
  connect.server({
    root: "app",
    livereload: true
  });
});

// auto-reload: it makes browser reload the page.
gulp.task("auto-reload", function () {
  gulp.src("./app/*.html")
    .pipe(connect.reload());
});

// watch: A task which watches files" change and kicks tasks.
gulp.task("watch", function () {
  gulp.watch(["./app/*.html",
              "./app/scripts/*.js",
              "./app/styles/*.css"]);
});

// regsiter default tasks
gulp.task("default", ["connect", "watch"]);
