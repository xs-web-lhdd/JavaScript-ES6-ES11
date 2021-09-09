// Promise静态方法：
// Promise.resolve()
// Promise.reject()

// let p1 = Promise.resolve('success')

// p1.then(res => {
//   console.log(res);
// })

// let p2 = Promise.reject('fail')
// console.log(p2);
// p2.catch(err => {
//   console.log(err);
// })

// 用法：
// function foo(flag) {
//   if (flag) {
//     return new Promise(resolve => {
//       resolve('success')
//     })
//   } else {
//     // return Promise.resolve('fail')
//     return Promise.reject('fail')
//     // return 'fail'
//   }
// }

// foo(false)
//   .then(res => {
//     console.log(res);
//   }, err => {
//     console.log(err);
//   })






// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1);
//     resolve('1成功')
//     // reject('1失败')
//   }, 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(2);
//     // resolve('2成功')
//     reject('2失败')
//   }, 2000)
// })

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(3);
//     resolve('3成功')
//   }, 3000)
// })


// 只要一个失败就认为全是失败的，只有所有完成才会认为完成
// Promise.all([p1, p2, p3]).then(res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// 只要一个完成就认为完成（以第一个执行完成的结果为准，第一个成功那就代表都成功，第一个失败那就代表都失败）
// Promise.race([p1, p2, p3]).then(res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// ===========>>>> 具体应用场景：
// Promise.all() --- 图片全部上传成功
const imgArr = ['1.jpg', '2.jpg', '3.jpg']
let promiseArr = []
imgArr.forEach(item => {
  promiseArr.push(new Promise((resolve, reject) => {
    resolve()
  }))
})

Promise.all(promiseArr).then(res => {
  console.log('图片全部上传成功');
})

// Promise.race() --- 上传图片成功与超时
function loadImg () {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = function () {
      resolve('上传成功')
    }
    img.src = 'http://www.dell-lee.com/imgs/vue3/%E9%B2%9C%E8%8A%B1.png'
  })
}

function timeOut () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('超时')
    }, 2000)
  })
}

// 要么图片上传成功，要么超时，这两个必有一个先执行，如果图片先上传那就是上传成功，如果2秒之后图片还是没执行，那么超时就会执行，这样状态就是超时的
Promise.race([loadImg(), timeOut()]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})