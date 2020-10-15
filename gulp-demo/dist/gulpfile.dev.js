"use strict";

// 引用gulp模块
var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');

var fileinclude = require('gulp-file-include');

var less = require('gulp-less');

var csso = require('gulp-csso');

var babel = require('gulp-babel');

var uglify = require('gulp-uglify'); // 使用gulp.task建立任务


gulp.task('first', function (done) {
  console.log('fisrt'); // 使用gulp.src获取要处理的文件

  gulp.src('./src/css/base.css').pipe(gulp.dest('dist/css'));
  done();
}); // html任务
// 1、html文件中的代码压缩操作
// 2、抽取HTML文件中的公共代码

gulp.task('html', function () {
  return gulp.src('src/*.html').pipe(fileinclude()).pipe(htmlmin({
    collapseWhitespace: true
  })).pipe(gulp.dest('dist'));
}); // css任务
// 1、less语法转换
// 2、css代码压缩

gulp.task('cssmin', function (done) {
  gulp.src(['./src/css/*.less', './src/css/*.css']).pipe(less()).pipe(csso()).pipe(gulp.dest('dist/css'));
  done();
}); // js任务
// 1、es6代码转换
// 2、代码压缩

gulp.task('jsmin', function (done) {
  gulp.src('./src/js/*.js').pipe(babel({
    presets: ['@babel/env']
  })).pipe(uglify()).pipe(gulp.dest('dist/js'));
  done();
}); // 复制文件夹

gulp.task('copy', function (done) {
  gulp.src('./src/images/*').pipe(gulp.dest('dist/images'));
  gulp.src('./src/lib/*').pipe(gulp.dest('dist/lib'));
  done();
}); // 构建任务

gulp.task('default', function (done) {
  ['html', 'cssmin', 'jsmin', 'copy'];
  done();
});