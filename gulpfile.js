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

// function buildHTML() {
//   return gulp.src('src/index.html')
//     .pipe(gulp.dest(OUTPUT))
//     .pipe(browserSync.stream())
//   // .pipe(gzip())
//   // .pipe(gulp.dest(OUTPUT));
// }

function buildLess() {
    return gulp.src('src/components/bundles/bundle.less')
        .pipe(less())
        .pipe(concat(STYLE_OUTPUT))
        .pipe(minifyCss())
        .pipe(gulp.dest(OUTPUT))
        .pipe(browserSync.stream())
    // .pipe(gzip())
    // .pipe(gulp.dest(OUTPUT));
}

function webpackConfig() {
    return gulp.src('src/components/bundles/bundle.js')
        .pipe(named())
        .pipe(webpackStream(config))
        .pipe(gulp.dest(OUTPUT))
        .pipe(browserSync.stream())
    // .pipe(gzip())
    // .pipe(gulp.dest('app'))
}

gulp.task('clean', cleanTask);
gulp.task('build-less', buildLess);
gulp.task('build-js', webpackConfig);
// gulp.task('build-html', buildHTML);

const debugTask = gulp.parallel('build-less', 'build-js' /*, 'build-html'*/);

function serveTask() {
    // browserSync.init({
    //     server: './' + OUTPUT,
    //
    // });

    nodemon({
        script: 'server.js',
        browser: "chrome"
    })
        .on('restart', function () {
            console.log('restarted!')
        });


    //lr.listen(35729);

    // gulp.watch('server/**/*', function(event) {
    //     var fileName = require('path').relative('3000', event.path);
    //     lr.changed({
    //         body: {
    //             files: [fileName]
    //         }
    //     });
    // });

    gulp.watch('src/components/bundles/*.js', gulp.series('build-js'));
    gulp.watch('src/components/bundles/*.less', gulp.series('build-less'));
    gulp.watch('src/components/component-news/less/*.less', gulp.series('build-less'));
}

gulp.task('serve', serveTask);

const defaultTask = gulp.series('clean', debugTask, 'serve');

gulp.task('default', defaultTask);