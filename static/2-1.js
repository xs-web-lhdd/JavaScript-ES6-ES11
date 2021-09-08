// proxy --- 基本使用
// let obj = {}
// let p = new Proxy(obj, {})
// p.name = 'imooc'
// console.log(obj.name);

// proxy --- 拦截方法 === get钩子函数使用
// 1、数组：
// let arr = [7, 8, 9]
// arr = new Proxy(arr, {
//   get(target, prop) {
//     // console.log(target, prop);
//     return prop in target ? target[prop] : 'error'
//   }
// })
// console.log(arr[0]);
// console.log(arr[10]);


// 2、对象：
// let dict = {
//   hello: 'hello',
//   world: 'world'
// }
// dict = new Proxy(dict, {
//   get(target, prop) {
//     return prop in target ? target[prop] : prop
//   }
// })
// console.log(dict['hello']);



// set 设置：
// let arr = []
// arr = new Proxy(arr, {
//   set(target, prop, val) {
//     if (typeof val === 'number') {
//       target[prop] = val
//       return true
//     } else {
//       return false
//     }
//   }
// })
// arr.push(5)

// console.log(arr[0]);


// has用来判断是否在范围中：
// let range = {
//   start: 1,
//   end: 5
// }
// range = new Proxy(range, {
//   has(target, prop) {
//     return prop >= range.start && prop <= range.end
//   }
// })
// console.log(2 in range);
// console.log(9 in range);

// oneKeys
// let obj = {
//   name: 'imooc',
//   [Symbol('es')]: 'es6'
// }
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(Object.keys(obj));
// for (let key in obj) {
//   console.log(key);
// }

// 通过ownKeys筛选出下划线_开头的属性
let userInfo = {
  userName: 'liang',
  age: 18,
  _password: '******'
}
userInfo = new Proxy(userInfo, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})

for (let key in userInfo) {
  console.log(key);
}