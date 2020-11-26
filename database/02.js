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

// 向集合中插入文档
// Course.create({
//   name: '沈占勇',
//   author: 'yongshen',
//   isPublished: false
// }, (err, res) => {
//   console.log(err)
//   console.log(res)
// })
Course.create({
  name: 'yang',
  author: 'weiling',
  isPublished: true
}).then((doc) => console.log(doc))
  .catch((err) => console.log(err))