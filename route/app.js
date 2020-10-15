// 引入系统模块http
// 创建网站服务器
// 为网站服务器对象添加请求事件
// 实现路由功能
  // 获取客户端的请求方式
  // 获取客户端的请求地址

const http = require('http');
const url = require('url')
const app = http.createServer();

app.on('request', (req, res) => {
  // 获取请求方式
  const method = req.method.toLowerCase();
  // 获取请求地址
  const pathname = url.parse(req.url).pathname;

  res.writeHead(200, {
    'content-type': 'text/html; charset=utf8'
  })
  if (method == 'get') {
    if (pathname == '/' || pathname == '/index') {
      res.end('welcome to homepage');
    }else if (pathname == '/list') {
      res.end('welcome to list');
    }else {
      res.end('您访问的页面不存在');
    }
  }else if (method == 'post') {

  }
});
app.listen(3000);
console.log('服务器启动成功');