// 普通函数：
// function foo() {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//   }
// }
// foo()


// generator函数：
// function* foo() {
//   for (let i = 0; i < 3; i++) {
//     yield i
//   }  
// }
// let f = foo()
// console.log(f.next()); // {value: 0, done: false}    value是当前的值，done是判断是否执行完成
// console.log(f.next()); // {value: 1, done: false}
// console.log(f.next()); // {value: 2, done: false}
// console.log(f.next()); // {value: undefined, done: true} 执行完成


// 注意：
// generator不能当作构造函数使用
// yield只能在generator中使用


// generator传值使用：
// function* get(x) {
//   let y = 2 * (yield(x + 1))
//   let z = yield(y / 3)
//   return x + y + z
// }
// let g = get(5)
// // console.log(g.next()); // 6
// // console.log(g.next()); // NaN
// // console.log(g.next()); // NaN

// console.log(g.next()); // 6
// console.log(g.next(12)); // y=24 8
// console.log(g.next(13)); // 42 z=13 y=24 x=5


// function* count(x = 1) {
//   while (true) {
//     if (x % 7 === 0) {
//       yield x
//     }
//     x++
//   }
// }
// let c = count()
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);
// console.log(c.next().value);



// generator异步状态管理：
function ajax (url, callback) {
  var XmlHttp
  if (window.XMLHttpRequest) {
    // 现代浏览器:
    XmlHttp = new XMLHttpRequest()
  } else {
    // 兼容早期浏览器:
    XmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 2 发送请求:
  XmlHttp.open('GET', url, true)
  XmlHttp.send()

  // 3 服务端响应
  XmlHttp.onreadystatechange = function() {
    if (XmlHttp.readyState === 4 && XmlHttp.status === 200) {
      var obj = JSON.parse(XmlHttp.responseText)
      // console.log(obj);
      callback(obj)
    }
  }
}
var url = 'https://www.fastmock.site/mock/c5d0565bfa454a9e486b470cf5fc7aeb/login/api/order'

function request(url) {
  ajax(url, res => {
    g.next(res)
  })
}

function* gen() {
  const a = yield request(url)
  console.log('a', a);
  const b = yield request(url)
  console.log('b', b);
  const c = yield request(url)
  console.log('c', c);
}

let g = gen()
g.next()


