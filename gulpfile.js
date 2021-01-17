'use strict';

const   {src, gulp, dest, parallel, series} = require('gulp'),
        watch = require('gulp-watch'),
        htmlmin = require('gulp-htmlmin'),
        prefixer = require('gulp-autoprefixer'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-sass'),
        sourcemaps = require('gulp-sourcemaps'),
        rigger = require('gulp-rigger'),
        cssmin = require('gulp-minify-css'),
        imagemin = require('gulp-imagemin'),
        rimraf = require('rimraf'),
        browserSync = require('browser-sync').create(),
        reload = browserSync.reload;


    function browsersync() {
        browserSync.init({ // 
            server: { baseDir: 'src/' }, 
            notify: false, 
            online: true 
        });
    }
    
    function templates() {
        return src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('build/'));
    }    

    function scripts() {
        return src('src/assets/js/app.js')
       .pipe(uglify())
       .pipe(browserSync.stream())// Сжимаем JavaScript
       .pipe(dest('build/'));
    }

    function styles() {
        return src('src/assets/scss/main.scss')
        .pipe(sass()) // Преобразуем значение переменной "preprocessor" в функцию
        .pipe(cssmin())
        .pipe(dest('build/'));
    }

    function images() {
        return src('src/assets/images/products/*') // Берём все изображения из папки источника
        .pipe(imagemin()) // Сжимаем и оптимизируем изображеня
        .pipe(dest('build/images'));
    }



function startwatch() {

    watch('src/assets/**/*.js', scripts);
    watch('src/assets/**/*.scss', styles);
    watch('src/assets/images/*', images);
    
 
}
exports.templates = templates;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;

exports.build = series( templates, styles, scripts, images);
exports.default = parallel(templates, styles, scripts, browsersync, startwatch);

