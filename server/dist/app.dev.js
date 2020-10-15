"use strict";

// 用于创建网站服务器的模块
var http = require('http'); // app对象就是网站服务器对象


var app = http.createServer(); // 用于处理URL地址

var url = require('url'); // 当客户端有请求的时候


app.on('request', function (req, res) {
  // 获取请求方式
  // console.log(req.headers);
  res.writeHead(200, {
    'content-type': 'text/html; charset=utf8'
  }); // parse两个参数
  // 1、需要解析的URL地址
  // 2、将查询参数解析成对象形式

  console.log(req.url);

  var _url$parse = url.parse(req.url, true),
      query = _url$parse.query,
      pathname = _url$parse.pathname;

  console.log(query.name);
  console.log(query.age); // console.log(url.parse(req.url, true));

  if (pathname == '/index' || pathname == '/') {
    res.end('<h2>欢迎来到主页</h2>');
  }

  if (req.method == 'GET') {
    res.end('get');
  } else if (req.method == 'POST') {
    res.end('post');
  } // console.log(req.method);
  // res.end('<h1>hello user</h1>');
  // 获取请求地址

});
app.listen(3000);
console.log('网站服务器创建成功');