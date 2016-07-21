'use strict';

import browserSync from 'browser-sync';
import del from 'del';
import proxy from 'proxy-middleware';
import url from 'url';
import gulp from 'gulp';
import sass from 'gulp-sass';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import ngAnnotate from 'gulp-ng-annotate';
import uglify from 'gulp-uglify';
import jshint from 'gulp-jshint';
import templateCache from 'gulp-angular-templatecache';
import minifycss from 'gulp-minify-css';
import usemin from 'gulp-usemin';
import extend from 'gulp-extend';

const PATH = {
  src: 'app/',
  assets: 'assets/',
  tmp: '.tmp/',
  dist: 'public/'
};

const LANGUAGES = ['en_US', 'vi_VN'];

let initBrowserSync = (env) => {
  var proxyOptions = url.parse('http://localhost:8080/api/');
  proxyOptions.route = '/api';
  browserSync({
    server: {
      baseDir: env === 'prod' ? PATH.dist : './'
    },
    logConnections: true,
    browser: 'default',
    port: 8080,
    middleware: [proxy(proxyOptions)]
  });
}

gulp.task('clean', () => {
  return del.sync([PATH.tmp + '*', PATH.dist + '*'], {force: true});
});

gulp.task('copy', ['clean'], () => {
  gulp.src(PATH.assets + 'images/**.*')
    .pipe(gulp.dest(PATH.tmp + 'assets/images/'))
    .pipe(gulp.dest(PATH.dist + 'assets/images/'));
  gulp.src(['bower_components/bootstrap/fonts/**.*', 'bower_components/font-awesome/fonts/**.*'])
    .pipe(gulp.dest(PATH.tmp + 'assets/fonts/'))
    .pipe(gulp.dest(PATH.dist + 'assets/fonts/'));
});

gulp.task('styles', ['clean'], () => {
  return gulp.src(PATH.assets + '**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest(PATH.tmp + 'assets/'));
});

gulp.task('scripts', () => {
  return browserify({ entries: PATH.src + 'app.js', debug: true })
  .transform(babelify, {
        presets: ["es2015"]
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(ngAnnotate())
  .pipe(gulp.dest(PATH.tmp));
});

gulp.task('templates', () => {
  return gulp.src(PATH.src + '**/*.html')
    .pipe(templateCache({ module: 'bstteam', root: PATH.src, moduleSystem: 'IIFE' }))
    .pipe(gulp.dest(PATH.tmp));
});

gulp.task('lint', () => {
  return gulp.src([PATH.src + '**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('build', ['copy', 'styles', 'templates', 'scripts']);

gulp.task('dist', ['build'], () => {
  return gulp.src('index.html')
    .pipe(usemin({
      css1: [minifycss()],
      css2: [minifycss()],
      js1: [uglify()],
      js2: [uglify()],
      js3: [uglify()]
    }))
    .pipe(gulp.dest(PATH.dist));
});

gulp.task('reload', ['build'], browserSync.reload);

gulp.task('serve', ['build'], () => {
  initBrowserSync('dev');
  gulp.watch(['*.html', 'assets/**/*.scss', 'app/**/*.js', 'app/**/*.html'], ['reload']);
});

gulp.task('serve-minify', ['dist'], () => {
  initBrowserSync('prod');
});

gulp.task('default', ['serve']);