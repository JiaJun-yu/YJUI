const gulp = require('gulp')

const sass = require('gulp-sass')

const autoprefixer = require('gulp-autoprefixer')

const cssmin = require('gulp-cssmin')

const concat = require('gulp-concat')

const base64 = require('gulp-base64')

function compile () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass.sync())
    .pipe(base64({
      extensions: ['svg', 'png', /\.jpg#datauri$/i],
      maxImageSize: 8*1024, // bytes,
      debug: true
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(concat('yjui.css'))
    .pipe(gulp.dest('./dist'))
}

gulp.task(compile)

gulp.task('default', gulp.parallel('compile'))

gulp.task('default', function () {
  return gulp.watch('./src/styles/*.scss', gulp.parallel('compile'))
})
