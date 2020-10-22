console.log('开始执行');

setTimeout(function() {
  console.log('2s');
}, 2000)

setTimeout(function() {
  console.log('0s')
}, 0)

console.log('结束执行');