// 引入mongoose
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/playground', 
{useUnifiedTopology: true,
useNewUrlParser: true})
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err, '数据库连接失败'))

// 创建集合
// 1、创建集合规则，2、创建集合

// 创建集合规则
const courseScheme = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
});
// 使用集合规则
// Course是有一个构造函数
const Course = mongoose.model('Course', courseScheme)

// 创建文档（即是往集合中插入数据，插入数据时，才会隐式的创建数据库）

// 1、创建集合实例
// 2、调用实例对象下的save方法将数据保存到数据库中

const course = new Course({
  name: 'node.js基础',
  author: '沈占勇',
  isPublished: true
});

// 将文档插入到数据库中
course.save();