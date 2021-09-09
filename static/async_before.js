// 同步异步：
// 经典题目：event loop

const a = 2
setTimeout(() => {
  console.log(a);
}, 0) // 最小是 4 毫秒，并不是写0就是0
console.log(a);


// AJAX：
var url = 'https://www.fastmock.site/mock/c5d0565bfa454a9e486b470cf5fc7aeb/login/api/order'
// AJAX原理:
// 1 创建XMLHttpRequest:
// var XmlHttp
// if (window.XMLHttpRequest) {
//   // 现代浏览器:
//   XmlHttp = new XMLHttpRequest()
// } else {
//   // 兼容早期浏览器:
//   XmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
// }

// // 2 发送请求:
// XmlHttp.open('GET', url, true)
// XmlHttp.send()

// // 3 服务端响应
// XmlHttp.onreadystatechange = function() {
//   if (XmlHttp.readyState === 4 && XmlHttp.status === 200) {
//     var obj = JSON.parse(XmlHttp.responseText)
//     console.log(obj);
//   }
// }

// 封装成函数:
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
ajax(url, res => {
  console.log(res);
})



// 回调地狱:

