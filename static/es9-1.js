
// const arr = ['es5', 'es6', 'es7', 'es8']

const { relativeTimeRounding } = require("moment")
const { Promise } = require("mongoose")



// 同步迭代：
// arr[Symbol.iterator] = function () {
//   let nextIndex = 0
//   return {
//     next() {
//       return nextIndex < arr.length ? {
//         value: arr[nextIndex++],
//         done: false
//       } : {
//         value: undefined,
//         done: true
//       }
//     }
//   }
// }

// for (let item of arr) {
//   console.log(item);
// }




function getPromise (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: time,
        done: false
      })
    }, time)
  })
}

const arr = [getPromise(1000), getPromise(2000), getPromise(3000)]

// 需求：一个异步执行完之后再执行下一个异步操作（这个不满足）
// for (let item of arr) {
//   console.log(item);
// }


// 满足需求写法：--- 异步迭代：
arr[Symbol.asyncIterator] = function () {
  let nextIndex = 0
  return {
    next() {
      return nextIndex < arr.length ? arr[nextIndex++] : Promise.resolve({
        value: undefined,
        done: true
      })
    }
  }
}

// for await of 用来迭代异步操作
async function test () {
  for await (let item of arr) {
    console.log(item);
  }
}
test()

