"use strict";

var http = require('http');

var url = require('url');

var app = http.createServer();

var path = require('path');

var fs = require('fs');

app.on('request', function (req, res) {
  // 获取用户的请求路径
  var pathname = url.parse(req.url).pathname; // 将用户的请求路径转换为实际服务器的硬盘路径
  // res.end(__dirname);

  var realPath = path.join(__dirname + '/public' + pathname); // res.end(realPath);

  fs.readFile(realPath, function (error, result) {
    if (error != null) {
      res.writeHead(404, {
        'content-type': 'text/html;charset=utf8'
      });
      res.end('读取文件失败');
    } else {
      res.end(result);
    }
  });
});
app.listen(3000);
console.log('服务器启动成功');