const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );
const cssmin = require( 'gulp-cssmin' );
const rename = require( 'gulp-rename' );
const ghPages = require( 'gulp-gh-pages' );
const concat = require( 'gulp-concat' );

const path = {
    build: {
        html: 'dist',
        js: 'dist/js',
        css: 'dist/css'
    },
    src: {
        html: 'src/index.html',
        scss: 'src/scss/main.scss',
        js: 'src/js/*.js'
    }
}


gulp.task( 'sass', function() {
    return gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.css))
});

gulp.task( 'html:build', function() {
    return gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html));
})

gulp.task( 'js:build', function() {
    return gulp.src(path.src.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(path.build.js));
})

gulp.task( 'deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
})