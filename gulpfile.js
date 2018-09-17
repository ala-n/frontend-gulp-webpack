const OUTPUT = 'app';
const STYLE_OUTPUT = 'styles.css';

const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const named = require('vinyl-named');
const minifyCss = require('gulp-clean-css');

const config = require('./webpack.config.js');

const browserSync = require('browser-sync').create();

function cleanTask() {
  return gulp.src('app/*.*', { read: false })
    .pipe(clean());
}

function buildHTML() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest(OUTPUT))
    .pipe(browserSync.stream())
  // .pipe(gzip())
  // .pipe(gulp.dest(OUTPUT));
}

function buildLess() {
  return gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(concat(STYLE_OUTPUT))
    .pipe(minifyCss())
    .pipe(gulp.dest(OUTPUT))
    .pipe(browserSync.stream())
  // .pipe(gzip())
  // .pipe(gulp.dest(OUTPUT));
}

function webpackConfig() {
  return gulp.src('src/js/index.js')
    .pipe(named())
    .pipe(webpackStream(config))
    .pipe(gulp.dest(OUTPUT + '/js'))
    .pipe(browserSync.stream())
  // .pipe(gzip())
  // .pipe(gulp.dest('app'))
}

gulp.task('clean', cleanTask);
gulp.task('build-less', buildLess);
gulp.task('build-js', webpackConfig);
gulp.task('build-html', buildHTML);

const debugTask = gulp.parallel('build-less', 'build-js', 'build-html');

function serveTask() {
  browserSync.init({
    server: './' + OUTPUT,
  });

  gulp.watch('src/js/*.js', gulp.series('build-js'));
  gulp.watch('src/less/*.less', gulp.series('build-less'));
  gulp.watch('src/*.html', gulp.series('build-html'));
}

gulp.task('serve', serveTask);

const defaultTask = gulp.series('clean', debugTask, 'serve');

gulp.task('default', defaultTask);