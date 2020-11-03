"use strict";

function getMsg(callback) {
  setTimeout(function () {
    callback({
      msg: "hello"
    });
  }, 3000);
}

var msg = getMsg(function (data) {
  console.log(data);
  return data;
});