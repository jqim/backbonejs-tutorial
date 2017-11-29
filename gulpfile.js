const gulp        = require('gulp');
const browserSync = require('browser-sync');
const concat      = require('gulp-concat');


gulp.task('vendor-js', function() {
  return gulp.src([
        './node_modules/backbone/backbone.js',
        './node_modules/underscore/underscore.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['vendor-js', 'serve']);
