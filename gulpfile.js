const OUTPUT = 'dest/';
const INPUT = 'src/bundles-content/';

const STYLE_OUTPUT = 'styles.css';

const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const named = require('vinyl-named');
const minifyCss = require('gulp-clean-css');
const nodemon = require('gulp-nodemon');

const config = require('./webpack.config.js');

const browserSync = require('browser-sync').create();

function cleanTask() {
    return gulp.src('dest/*.*', {read: false})
        .pipe(clean());
}

function buildLess() {
    return gulp.src(INPUT + '*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(STYLE_OUTPUT))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(OUTPUT))
        .pipe(browserSync.stream())
}

function webpackConfig() {
    return gulp.src(INPUT + '*.js')
        .pipe(named())
        .pipe(webpackStream(config))
        .pipe(gulp.dest(OUTPUT))
        .pipe(browserSync.stream())
}

gulp.task('clean', cleanTask);
gulp.task('build-less', buildLess);
gulp.task('build-js', webpackConfig);

const debugTask = gulp.parallel('build-less', 'build-js');

function serveTask() {
    browserSync.init({
        proxy: {
            target: 'localhost:3030',
            //ws: true
        },
        browser: "chrome",
        // server: {
        //     baseDir: './',
        //     directory: true,
        // },
    });

    nodemon({
        script: 'server.js',
    }).on('restart', function () {
        console.log('restarted!')
    });

    gulp.watch('src/**/*.js', {}, gulp.series('build-js'));
    gulp.watch('src/**/*.less', gulp.series('build-less'));
}

gulp.task('serve', serveTask);

const defaultTask = gulp.series('clean', debugTask, 'serve');

gulp.task('default', defaultTask);
