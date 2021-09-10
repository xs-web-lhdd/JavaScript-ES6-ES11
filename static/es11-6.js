// 空值合并运算符:


// 一般写法:
// const b = 2
// const a = b || 5
// console.log(a);


// 一般写法的 bug
// const b = 0
// const a = b || 5
// console.log(a);


// es11中 空值合并运算符 ?? 
const b = 0 // 只有传递 undefined 和 null 才会取默认值
const a = b ?? 10
console.log(a);