/**
 * Created by Norman on 31/10/2016.
 */
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    pump = require('pump');



gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('minify', function() {
    return gulp.src(['src/app/*.js', 'src/app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(gulp.dest('src/app'));
});