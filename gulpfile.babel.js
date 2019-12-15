'use strict';

import gulp from "gulp";

var watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    babel = require("gulp-babel"),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    terser = require('gulp-terser');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        scss: 'src/scss/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
    },
    watch: {
        html: 'src/**/*.html',
        js: ['src/js/**/*.js', 'src/js/**/*.vue'],
        scss: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
    }
};

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil",
    open: false
};


/**
 * Compilers for HTML & assets
 */

// Compile HTML
const compileHtml = () => {
    return gulp.src([path.src.html])
        .pipe(plumber())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({
            stream: true
        }));
};

// Compile Styles
const compileStyles = () => {
    return gulp.src(path.src.scss)
        // .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        // .pipe(sourcemaps.write('.', { sourceRoot: 'css-source' }))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({
            stream: true
        }));
};

// Compile JS
const compileJS = () => {
    return gulp.src(path.src.js)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(terser())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({
            stream: true
        }));
};

// Compile Images
const compileImages = () => {
    return gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({
            stream: true
        }));
};


// Compile Fonts
const compileFonts = () => {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({
            stream: true
        }));
};

// Compile everything together
const compile = gulp.parallel(compileHtml, compileStyles, compileJS, compileImages, compileFonts);
compile.description = 'compile all sources'


/**
 * Watchers for html & assets
 */

const watchHtml = () => {
    return gulp.watch(path.watch.html, compileHtml);
};

const watchStyles = () => {
    return gulp.watch(path.watch.scss, compileStyles);
};

const watchJS = () => {
    return gulp.watch(path.watch.js, compileJS);
};

const watchImages = () => {
    return gulp.watch(path.watch.img, compileImages);
};

const watchAll = gulp.parallel(watchHtml, watchStyles, watchJS, watchImages);

const webserver = () => {
    return browserSync(config);
};

const serve = gulp.series(compile, webserver);

// Default Gulp Task
const defaultTasks = gulp.parallel(serve, watchAll);

export {
    compileHtml,
    compileStyles,
    compileJS,
    compileImages,
    compileFonts,
    watchHtml,
    watchImages,
    watchJS,
    watchStyles,
    watchAll,
    compile,
    serve
}

export default defaultTasks