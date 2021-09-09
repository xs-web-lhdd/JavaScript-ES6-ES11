// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('liang');
//     reject()
//   }, 1000)
// }).then(() => {
//   console.log('成功');
// }, () => {
//   console.log('失败');
// })


// 最基本用法:
// 


// Promise在new的时候先执行(立即执行),后面的参数then是后执行的(异步)
// let p = new Promise((resolve, reject) => {
//   console.log(111);
//   resolve()
// })
// console.log(222);
// p.then((res) => {
//   console.log(333);
// })


// let p1 = new Promise((resolve, reject) => {
//   resolve(1)
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 1000)
// })

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(3)
//   }, 1000)
// })

// console.log(p1); // fulfilled
// console.log(p2); // pending => fulfilled
// console.log(p3); // pending => rejected
// setTimeout(() => {
//   console.log(p2);
// }, 2000)         // fulfilled
// setTimeout(() => {
//   console.log(p3);
// }, 2000)         // rejected

// p1.then((res) => {
//   console.log(res);
// })
// p2.then(res => {
//   console.log(res);
// })
// p3.catch(err => {
//   console.log(err);
// })


// Promise状态不可逆
// let p = new Promise((resolve, reject) => {
//   resolve(1)
//   reject(2)
// })
// p.then(res => {
//   console.log(res);
// })
// p.catch(err => {
//   console.log(err);
// })