"use strict";

var fs = require('fs');

var _require = require('path'),
    resolve = _require.resolve; // const { resolve } = require('path');
// fs.readFile('./1.txt', 'utf8', (err, result1) => {
//   console.log(result1);
//   fs.readFile('./2.txt', 'utf8', (err, result2) => {
//     console.log(result2);
//     fs.readFile('./3.txt', 'utf8', (err, result3) => {
//       console.log(result3);
//     })
//   })
// });


function promise(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, 'utf8', function (err, result) {
      if (err != null) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

promise('./1.txt').then(function (result1) {
  console.log(result1);
  return promise('./2.txt').then(function (result2) {
    console.log(result2);
    return promise('./3.txt').then(function (result3) {
      console.log(result3);
    });
  });
}); // function p1() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./1.txt', 'utf8', (err, result1) => {
//       if(err != null) {
//         reject(err);
//       }else {
//         resolve(result1);
//       }
//     })
//   })
// }
// function p2() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./2.txt', 'utf8', (err, result2) => {
//       if(err != null) {
//         reject(err);
//       }else {
//         resolve(result2);
//       }
//     })
//   })
// }
// function p3() {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./3.txt', 'utf8', (err, result3) => {
//       if(err != null) {
//         reject(err);
//       }else {
//         resolve(result3);
//       }
//     })
//   })
// }
// p1().then((r1) => {
//   console.log(r1);
//   return p2();
// }).then((r2) => {
//   console.log(r2);
//   return p3();
// }).then((r3) => {
//   console.log(r3);
// })