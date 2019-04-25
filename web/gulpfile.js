var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver')

gulp.task('devScss', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('devScss'));

})


gulp.task('server', function() {
    return gulp.src('src')
        .pipe(webserver({
            port: 9099
        }))
})

gulp.task('dev', gulp.series('devScss', 'server', 'watch'))