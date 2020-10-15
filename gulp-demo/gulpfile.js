// 引用gulp模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
const less = require('gulp-less')
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
// 使用gulp.task建立任务
gulp.task('first', (done) => {
  console.log('fisrt');
  // 使用gulp.src获取要处理的文件
  gulp.src('./src/css/base.css').pipe(gulp.dest('dist/css'));
  done();
});

// html任务
// 1、html文件中的代码压缩操作
// 2、抽取HTML文件中的公共代码
gulp.task('html', () => {
  return gulp.src('src/*.html')
      .pipe(fileinclude())
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
      
})
// css任务
// 1、less语法转换
// 2、css代码压缩
gulp.task('cssmin', (done) => {
  gulp.src(['./src/css/*.less', './src/css/*.css'])
      .pipe(less())
      .pipe(csso())
      .pipe(gulp.dest('dist/css'))
  done();
});

// js任务
// 1、es6代码转换
// 2、代码压缩
gulp.task('jsmin', (done) => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    done();
})

// 复制文件夹
gulp.task('copy', (done) => {
  gulp.src('./src/images/*')
      .pipe(gulp.dest('dist/images'))
  gulp.src('./src/lib/*')
      .pipe(gulp.dest('dist/lib'))
  done();
})


// 构建任务
gulp.task('default', (done) => {
  ['html', 'cssmin', 'jsmin', 'copy']
  done();
});