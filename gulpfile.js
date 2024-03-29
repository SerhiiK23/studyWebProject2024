const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
//const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename"); // Добавлен импорт

async function server() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
}

function styles() {
    return gulp.src("src/css/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min', prefix: '' })) // Использование функции rename
        //.pipe(autoprefixer({
        //    browsers: ['last 16 versions'],
        //    cascade: false
        //}))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream());
}

function watch() {
    gulp.watch("src/css/*.+(scss|sass)", styles);
}

exports.default = gulp.parallel(watch, server, styles);
