// es5 进行拦截
// let obj = {}
// let newVal = ''
// Object.defineProperties(obj, 'name', {
//   get() {
//     return newVal
//   },
//   set(val) {
//     console.log('set');
//     newVal = val
//   }
// })

// obj.name = 'es'
// console.log(obj.name);


// 使用Reflect --- 将一些方法从 Object转移到 Reflect
// let obj = {}
// let newVal = ''
// Reflect.defineProperties(obj, 'name', {
//   get() {
//     return newVal
//   },
//   set(val) {
//     console.log('set');
//     newVal = val
//   }
// })

// obj.name = 'es'
// console.log(obj.name);


// try {
//   Object.defineProperty()
// } catch (error) {
  
// }

// if (Reflect.defineProperty()) {

// } else {

// }

// 命令写法 => 函数写法
// 命令式写法:
// console.log('assign' in Object); // true
// // 函数式写法:
// console.log(Reflect.has(Object, 'assign'));


// Reflect 与 Proxy一一对应
let user = {
  name: 'liang',
  age: 24,
  _password: '***'
}
user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw Error('不可访问')
    } else {
      // return target[prop]
      return Reflect.get(target, prop)
    }
  },
  set(target, prop, val) {
    if (prop.startsWith('_')) {
      throw Error('不可访问')
    } else {
      Reflect.set(target, prop, val)
      // target[prop] = val
      return true
    }
  },
  deleteProperty(target, prop) {
    if (prop.startsWith('_')) {
      throw Error('不可删除')
    } else {
      // delete target[prop]
      Reflect.deleteProperty(target, prop)
      return true
    }
  },
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
    // return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})

// console.log(user._password);
// console.log(user.name);

// user.age = 18
// console.log(user.age);
// user._password= 'xxx'

// delete user.age
// console.log(user.age);

for (let key in user) {
  console.log(key);
}
