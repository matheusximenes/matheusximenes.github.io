var gulp = require('gulp'),
    sass = require('gulp-ruby-sass')
    notify = require("gulp-notify")
    bower = require('gulp-bower');

var paths = {
    css: './css/',
    sass: './scss/',
    bower: './bower_components',
    fonts: './fonts'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(paths.bower))
});

gulp.task('icons', function() {
    return gulp.src(paths.bower + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest(paths.fonts));
});

gulp.task('style', function() {
    return sass(paths.sass + '**/*.scss' 
            //,{style: 'compressed'}
            )
           .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            }))
        .pipe(gulp.dest(paths.css));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.sass + '/**/*.scss', ['style']);
});
    
gulp.task('default', ['bower', 'icons', 'style', 'watch']);