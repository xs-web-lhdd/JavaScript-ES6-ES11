// async 是generator函数的语法糖，await需要写在async里面，async/await将异步变同步

// function foo () {
//   return 'imooc'
// }
// console.log(foo());


// async function foo () {
//   return 'imooc' // Promise {<fulfilled>: "imooc"} 跟 Promise.resolve('imooc') 写法一样
// }
// console.log(foo());


// async function foo () {
//   let result = await 'imooc'
//   return result
// }
// console.log(foo());




// function timeOut () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve()
//     }, 1000)
//   })
// }

// async function foo () {
//   timeOut()
//   console.log(2);
// }
// foo()


// 添加 await 实现同步
// function timeOut () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve()
//     }, 1000)
//   })
// }

// async function foo () {
//   await timeOut()
//   console.log(2);
// }
// foo()



// function timeOut () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log(1);
//       resolve(1)
//     }, 1000)
//   })
// }
// async function foo () {
//   const res = await timeOut()
//   console.log(res);
//   console.log(2);
// }
// foo()


function timeOut () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(1);
      reject(1)
    }, 1000)
  })
}
async function foo () {
  const res = await timeOut()
  console.log(res);
  console.log(2);
}
foo().catch(err => {
  console.log(err);
})