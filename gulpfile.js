const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );
const cssmin = require( 'gulp-cssmin' );
const rename = require( 'gulp-rename' );
const ghPages = require( 'gulp-gh-pages' );

gulp.task( 'sass', function() {
    return gulp.src( './src/scss/main.scss' )
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest( './dist' ))
});

gulp.task( 'deploy', function() {
    return gulp.src( './dist')
        .pipe(ghPages());
})