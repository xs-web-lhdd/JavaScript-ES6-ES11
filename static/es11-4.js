// globalthis



// 不同环境全局对象不一样：
// node global
// web: window self

// self.setTimeout(() => {
//   console.log('es');
// }, 1000)



// 自己获取全局对象：
const getGlobal = () => {
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw Error('无法获取全局对象')
}

const global = getGlobal()
console.log(global);



// es11推出的 globalThis
console.log(globalThis);