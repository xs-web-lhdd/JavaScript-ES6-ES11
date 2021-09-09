// 是一种接口机制，为各种不同的数据结构提供统一的访问机制
// 主要供 for ... of 消费
// 一句话： 不支持遍历的数据结构可“遍历”


// 这种形式跟generator写法几乎一样
// function makeIterator (arr) {
//   let nextIndex = 0
//   return {
//     next () {
//       return nextIndex < arr.length ?  {
//         value: arr[nextIndex++],
//         done: false
//       } : {
//         value: undefined,
//         done: true
//       }
//     }
//   }
// }
// // 执行过程： 可以把遍历器对象当作指针来进行看待，第一次执行时指向第一个成员，第二次执行时指向第二个成员
// let it = makeIterator(['a', 'b', 'c'])
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());





// 对不可遍历的对象进行遍历:
let course = {
  allCourse: {
    frontend: ['ES', '小程序', 'Vue', 'React'],
    backend: ['Java', 'Python', 'Spring'],
    webapp: ['Ios', 'Android']
  }
}

// 报错: 尝试迭代不可以迭代的实例
// for(let c of course) {
//   console.log(c);
// }


// 数组中有Symbol.iterator,可以迭代
// let arr = ['a', 'b', 'c']
// console.log(arr);
// let it = arr[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// map中有Iterator
// let map = new Map()
// map.set('name', 'es')
// map.set('age', 5)
// map.set('school', 'imooc')
// // console.log(map);
// // 进行遍历 --- 使用迭代器
// let it = map[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());



// 原生具有 Iterator 接口的数据结构
// Array Set Map String TypedArray 函数的arguments对象 NodeList对象

// 具有以下两个协议才可进行迭代:
// 可迭代协议: Symbol.iterator  具有此协议就可以进行for ... of 循环
// 迭代器协议: return {
//   next() {
//     return {
//       value: xxx,
//       done: xx
//     }
//   }
// }


// 改造后的可迭代:
course[Symbol.iterator] = function() {
  let allCourse = this.allCourse
  let keys = Reflect.ownKeys(allCourse)
  let values= []
  return {
    next() {
      if (!values.length) {
        if (keys.length) {
          values = allCourse[keys[0]]
          keys.shift()
        }
      }
      return {
        // 注意顺序
        done: !values.length,
        value: values.shift()
      }
    }
  }
}

for(let c of course) {
  console.log(c);
}
