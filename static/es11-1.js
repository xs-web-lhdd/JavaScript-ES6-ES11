// 字符串匹配：
// 

const str = `
  <html>
    <body>
      <div>第一个div</div>
      <p>这是P</p>
      <span>这是SPAN</span>
      <div>第二个div</div>
    </body>
  </html>
`

// 通过 正则表达式 匹配所有div --- 可以设置子表达式（捕获组）筛选出内容（在该例子中可以筛选出内容）
// function selectDiv (regExp, str) {
//   let matches = []
//   while (true) {
//     const match = regExp.exec(str)
//     if (match === null) {
//       break
//     }
//     matches.push(match[1])
//   }
//   return matches
// }

// const regExp = /<div>(.*)<\/div>/g
// const res = selectDiv(regExp, str)

// console.log(res);



// 使用 match --- 返回的是匹配的文本的结果（在该例子中就无法筛选出div内的结果）
const regExp = /<div>(.*)<\/div>/g
console.log(str.match(regExp));



// replace
// function selectDivT (regExp, str) {
//   let matches = []
//   str.replace(regExp, (all, first) => {
//     matches.push(first)
//   })
//   return matches
// }
// const res = selectDivT(regExp, str)
// console.log(res);



// 全局模式匹配：matchAll --- 传入匹配规则
function selectDiv (regExp, str) {
  let matches = []
  for (let item of str.matchAll(regExp)) {
    matches.push(item)
  }
  return matches
}
const res = selectDiv(regExp, str)
console.log(res);