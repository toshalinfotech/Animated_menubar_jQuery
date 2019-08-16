// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest(function(f) {
            if(f.relative === "skin.css"){
                return f.cwd.substring(0, f.cwd.lastIndexOf('\\'));
            } else {
                return f.cwd.substring(0, f.cwd.lastIndexOf('\\')) + ('\\css');
            }
        }))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('*.scss', ['sass']);
})