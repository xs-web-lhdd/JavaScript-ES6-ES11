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
// ajax(url, res => {
//   console.log(res);
// })

// 比较笨拙的改写法 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var url = 'https://www.fastmock.site/mock/c5d0565bfa454a9e486b470cf5fc7aeb/login/api/order'

// new Promise((resolve, reject) => {
//   ajax(url, res => {
//     console.log(res);
//     resolve()
//   })
// }).then(res => {
//   console.log('1成功');
//   return new Promise((resolve, reject) => {
//     ajax(url, res => {
//       console.log(res);
//       resolve()
//     })
//   })
// }).then(res => {
//   console.log('2成功');
// return new Promise((resolve, reject) => {
//   ajax(url, res => {
//     console.log(res);
//     resolve()
//   })
// })
// }).then(res => {
//   console.log('3成功');
// })



// 另外一种写法 ++++++++++++++++++++++++++++++++++++++++++++++++++
function getPromise(url) {
  return new Promise((resolve, reject) => {
    ajax(url, res => {
      resolve(res)
    })
  })
}

getPromise(url)
  .then(res => {
    console.log('A',  res);
    return getPromise(url)
  })
  .then(res => {
    console.log('B' , res);
    return getPromise(url)
  })
  .then(res => {
    console.log('C', res);
  })
// 上面这种写法代码方式扁平化，可读性大大提高，解决了回调地狱的问题