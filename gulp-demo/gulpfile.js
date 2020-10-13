// 引用gulp模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin')
const fileinclude = 
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
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
      
})
