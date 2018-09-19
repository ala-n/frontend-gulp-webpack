const OUTPUT = 'dest';
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
    return gulp.src('src/components/bundles/bundle.less')
        .pipe(less())
        .pipe(concat(STYLE_OUTPUT))
        .pipe(minifyCss())
        .pipe(gulp.dest(OUTPUT))
        .pipe(browserSync.stream())
}

function webpackConfig() {
    return gulp.src('src/components/bundles/bundle.js')
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
        proxy: "localhost:3030",
        browser: "chrome",
    });
    nodemon({
        script: 'server.js',
    })
        .on('restart', function () {
            console.log('restarted!')
        });
    gulp.watch('src/components/bundles/*.js', gulp.series('build-js'));
    gulp.watch('src/components/bundles/*.less', gulp.series('build-less'));
    gulp.watch('src/components/component-news/less/*.less', gulp.series('build-less'));
}

gulp.task('serve', serveTask);

const defaultTask = gulp.series('clean', debugTask, 'serve');

gulp.task('default', defaultTask);