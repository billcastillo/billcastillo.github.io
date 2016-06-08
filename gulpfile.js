// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./lib/stylus/*.styl', ['stylus']);
});

// Gulp Stylus
gulp.task('stylus', function () {
  gulp.src('./lib/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Static Server + watching scss/html files
gulp.task('serve', ['stylus'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./lib/stylus/*.styl", ['stylus']).on('change', browserSync.reload);
    gulp.watch("./dist/js/*.js", ['scripts']).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['stylus', 'serve', 'watch']);