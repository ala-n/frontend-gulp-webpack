const paths = require('./paths/paths-config');
const OUTPUT_DIR = paths.OUTPUT_DIR;
const INPUT_DIR = paths.INPUT_DIR;
const STYLE_OUTPUT = paths.STYLE_OUTPUT;

const gulp = require('gulp');
const gzip = require('gulp-gzip');
const webpackStream = require('webpack-stream');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const named = require('vinyl-named');
const minifyCss = require('gulp-clean-css');
const nodemon = require('gulp-nodemon');
const tslint = require("gulp-tslint");
const prodConfig = require('./webpack-config/prod.webpack.config.js');
const devConfig = require('./webpack-config/dev.webpack.config.js');

const browserSync = require('browser-sync').create();

function cleanTask() {
    return gulp.src('dist/*.*', {read: false})
        .pipe(clean());
}

function buildLess() {
    return gulp.src(INPUT_DIR + '*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(STYLE_OUTPUT))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(OUTPUT_DIR))
        .pipe(browserSync.stream())
        .pipe(gzip())
        .pipe(gulp.dest(OUTPUT_DIR))
}

function prodWebpackConfig() {
    return gulp.src(INPUT_DIR + '*.ts')
        .pipe(named())
        .pipe(webpackStream(prodConfig))
        .pipe(gulp.dest(OUTPUT_DIR))
        .pipe(gzip())
        .pipe(gulp.dest(OUTPUT_DIR))
}

function devWebpackConfig() {
    return gulp.src(INPUT_DIR + '*.ts')
        .pipe(named())
        .pipe(webpackStream(devConfig))
        .pipe(gulp.dest(OUTPUT_DIR))
        .pipe(browserSync.stream())
}

gulp.task('tslint', () =>
    gulp.src(['src/**/' + '*.ts', '!node_modules/**'])
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report())
);
gulp.task('clean', cleanTask);
gulp.task('build-less', buildLess);
gulp.task('prod-build-ts', prodWebpackConfig);
gulp.task('dev-build-ts', devWebpackConfig);

const prodDebugTask = gulp.parallel('build-less', 'prod-build-ts');
const devDebugTask = gulp.parallel('build-less', 'dev-build-ts');

function serveTask() {
    browserSync.init({
        proxy: {
            target: 'localhost:3030',
        },
        browser: "chrome",
    });

    nodemon({
        script: 'server.js',
    }).on('restart', function () {
        console.log('restarted!')
    });

    gulp.watch('src/**/' + '*.ts', { usePolling: true }, gulp.series('dev-build-ts'));
    gulp.watch('src/**/' + '*.less', { usePolling: true },  gulp.series('build-less'));
}

gulp.task('serve', serveTask);

gulp.task('devBuild', gulp.series('clean', 'tslint',  devDebugTask, 'serve'));
gulp.task('prodBuild', gulp.series('clean', prodDebugTask, 'serve'));

gulp.task('default', gulp.series('devBuild'));
gulp.task('prod', gulp.series('prodBuild'));
