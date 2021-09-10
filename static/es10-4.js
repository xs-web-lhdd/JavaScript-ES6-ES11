// 修订 Func.prototype.toString()

// function foo () {
//   // 这是 ES10
//   console.log('ES10');
// }

// console.log(foo.toString());




// #############################################################
// 可选的 Catch Binding

// 省略的 catch 绑定的参数和括号


// ES10 之前 catch的参数和括号必须要写
// const validJson = json => {
//   try {
//     JSON.parse(json)
//     return true
//   } catch (error) {
//     console.log(error);
//   }
// }

// const json = '{"name": "imooc}'
// validJson(json)


// ES10 之后参数和括号可以不写:
// const validJson = (json) => {
//   try {
//     JSON.parse(json)
//     return true
//   } catch {
//     return false
//   }
// }

// const json = '{"name": "imooc}'
// console.log(validJson(json));





// ####################################################
// JSON的扩展:
// JSON superset （支持段/行分隔符）
// JSON.stringify()增强能力


// 支持段/行分隔符：（早期会报错）
// eval('var str = "imooc";\u2029 function foo () {return str;}')
// console.log(foo());


// 0xD800 ~ 0xDfff
// 超出这个范围就会有问题
// console.log(JSON.stringify('\uD83D\uDE0E')); // "😎"
// // '\uD83D\uDE0E' 是一个字符，但如果输入 '\uD83D'（这不是一个字符），那么以前就会报错，但 ES10 之后就不会报错了(对于错误的字符会原样返回)
// console.log(JSON.stringify('\uD83D')); // '\uD83D'






// ######################################################
// Symbol --- 一般用于对象的属性唯一的时候
// Symbol.prototype.description 获取 Symbol 的描述（只读，不能写入）

// const s = Symbol('imooc')
// console.log(s);
// console.log(s.description); // 获取当前 Symbol 的描述，没有描述时返回 undefined


// 只读：
const q = Symbol('imooc')
q.description = 'qqqq' // 设置没用 --- 该属性是只读的属性
console.log(q);
console.log(q.description); // 获取当前 Symbol 的描述