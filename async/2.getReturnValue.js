function getMsg(callback) {
  setTimeout(function() {
    callback({
      msg: "hello"
    })
  }, 3000)
}
const msg = getMsg(function(data) {
  console.log(data);
  return data;
});
