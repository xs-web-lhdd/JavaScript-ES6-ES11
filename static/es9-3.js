// Promise扩展：Promise.prototype.finally()

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('success')
//     reject('fail')
//   }, 1000)
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


// Promise.finally() --- 不管成功失败都会到finally中

new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('success')
    reject('fail')
  }, 1000)
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}).finally(() => {
  console.log('finally');
})





