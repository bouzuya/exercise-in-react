babel = require 'gulp-babel'
browserify = require 'browserify'
browserSync = require 'browser-sync'
buffer = require 'vinyl-buffer'
coffee = require 'gulp-coffee'
del = require 'del'
espower = require 'gulp-espower'
gulp = require 'gulp'
gutil = require 'gulp-util'
mocha = require 'gulp-mocha'
source = require 'vinyl-source-stream'
sourcemaps = require 'gulp-sourcemaps'

ignoreError = (stream) ->
  stream.on 'error', (e) ->
    gutil.log e
    @emit 'end'

gulp.task 'build', ['build-html', 'build-js'], ->
  bundled = browserify
    debug: false
  .add './.tmp/src/index.js'
  .bundle()
  bundled
  .pipe source 'main.js'
  .pipe buffer()
  .pipe gulp.dest './dist/scripts/'

gulp.task 'build-dev', ['build-html', 'build-js-dev'], ->
  bundled = browserify
    debug: true
  .add './.tmp/src/index.js'
  .bundle()
  ignoreError bundled
  .pipe source 'main.js'
  .pipe buffer()
  .pipe gulp.dest './dist/scripts/'

gulp.task 'build-html', ->
  gulp.src './src/**/*.html'
  .pipe gulp.dest './dist/'

gulp.task 'build-js', ->
  gulp.src './src/**/*.js'
    .pipe babel comments: false
    .pipe gulp.dest './.tmp/src/'

gulp.task 'build-js-dev', ->
  gulp.src './src/**/*.js'
    .pipe sourcemaps.init()
    .pipe ignoreError babel(comments: false)
    .pipe sourcemaps.write()
    .pipe gulp.dest './.tmp/src/'

gulp.task 'build-test', ->
  gulp.src './test/*'
    .pipe sourcemaps.init()
    .pipe coffee()
    .pipe espower()
    .pipe sourcemaps.write()
    .pipe gulp.dest './.tmp/'

gulp.task 'build-test-dev', ->
  gulp.src './test/*'
    .pipe sourcemaps.init()
    .pipe ignoreError coffee()
    .pipe ignoreError espower()
    .pipe sourcemaps.write()
    .pipe gulp.dest './.tmp/'

gulp.task 'clean', (done) ->
  del [
    './.tmp'
    './dist'
  ], done

gulp.task 'default', ['build']

gulp.task 'test', ['build', 'build-test'], ->
  gulp.src './.tmp/*'
    .pipe mocha()

gulp.task 'test-dev', ['build-dev', 'build-test-dev'], ->
  gulp.src './.tmp/*'
    .pipe ignoreError mocha()

gulp.task 'watch', ['build-dev'], ->
  browserSync
    server:
      baseDir: './dist/'
  gulp.watch ['./src/*', './test/*'], ['test-dev', browserSync.reload]
