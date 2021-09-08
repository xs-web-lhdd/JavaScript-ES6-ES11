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
// let userInfo = {
//   userName: 'liang',
//   age: 18,
//   _password: '******'
// }
// userInfo = new Proxy(userInfo, {
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith('_'))
//   }
// })

// for (let key in userInfo) {
//   console.log(key);
// }


// get 拦截：
// let user = {
//   name: 'liang',
//   age: 24,
//   _password: '***'
// }
// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith('_')) {
//       throw Error('不可访问')
//     } else {
//       return target[prop]
//     }
//   }
// })
// console.log(user.name);
// console.log(user._password);

// set拦截：
// let user = {
//   name: 'liang',
//   age: 24,
//   _password: '***'
// }
// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith('_')) {
//       throw Error('不可访问')
//     } else {
//       return target[prop]
//     }
//   },
//   set(target, prop, val) {
//     if(prop.startsWith('_')) {
//       throw Error('不可访问')
//     } else {
//       target[prop] = val
//       return true
//     }
//   }
// })
// user.age = 18
// console.log(user.age);
// user._password = '123'
// console.log(user._password);

// 删除拦截：
// let user = {
//   name: 'liang',
//   age: 24,
//   _password: '***'
// }
// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith('_')) {
//       throw Error('不可访问')
//     } else {
//       return target[prop]
//     }
//   },
//   set(target, prop, val) {
//     if (prop.startsWith('_')) {
//       throw Error('不可访问')
//     } else {
//       target[prop] = val
//       return true
//     }
//   },
//   deleteProperty(target, prop) {
//     if (prop.startsWith('_')) {
//       throw Error('不可删除')
//     } else {
//       delete target[prop]
//       return true
//     }
//   }
// })
// try {
//   delete user.age
// } catch (error) {
//   console.log(error.message);
// }
// console.log(user.age);

// try {
//   delete user._password
// } catch (error) {
//   console.log(error.message);
// }
// console.log(user._password);


// ownKeys
// let user = {
//   name: 'liang',
//   age: 24,
//   _password: '***'
// }
// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith('_')) {
//       throw Error('不可访问')
//     } else {
//       return target[prop]
//     }
//   },
//   set(target, prop, val) {
//     if (prop.startsWith('_')) {
//       throw Error('不可访问')
//     } else {
//       target[prop] = val
//       return true
//     }
//   },
//   deleteProperty(target, prop) {
//     if (prop.startsWith('_')) {
//       throw Error('不可删除')
//     } else {
//       delete target[prop]
//       return true
//     }
//   },
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith('_'))
//   }
// })
// for (let key in user) {
//   console.log(key);
// }



// apply 拦截 当函数调用或call、apply拦截时执行
// let sum = (...args) => {
//   let num = 0
//   args.forEach(item => {
//     num += item
//   })
//   return num
// }
// sum = new Proxy(sum, {
//   apply(target, ctx, args) {
//     return target(...args) * 2
//   }
// })

// console.log(sum(1, 2));
// console.log(sum.call(null, 1, 2, 3));
// console.log(sum.apply(null, [1, 2, 3]));


// construct  new
let User = class {
  constructor(name) {
    this.name = name
  }
}
User = new Proxy(User, {
  construct(target, args, newTarget) {
    return new target(...args)
  }
})

console.log(new User('imooc'));