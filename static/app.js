const http = require('http');
const url = require('url');
const app = http.createServer();
const path = require('path');
const fs = require('fs');
const mime =require('mime');
app.on('request', (req, res) => {
  // 获取用户的请求路径
  let pathname = url.parse(req.url).pathname;
  // 将用户的请求路径转换为实际服务器的硬盘路径
  pathname = pathname == '/' ? '/default.html' : pathname;
  let realPath = path.join(__dirname + '/public' + pathname);
  // res.end(realPath);
  console.log(__dirname);
  let type = mime.getType(realPath);
  console.log(type);
  fs.readFile(realPath, (error, result) => {
    if(error != null) {
      res.writeHead(404, {
        'content-type': 'text/html;charset=utf8'
      })
      res.end('读取文件失败');
    }else {
      res.writeHead(200, {
        'content-type': type
      })
      res.end(result);
    }
    
  })
});
app.listen(3000);
console.log('服务器启动成功');