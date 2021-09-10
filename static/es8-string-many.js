// 字符串扩展：

// String.prototype.padStart()
// String.prototype.padEnd()

const str = 'imooc'
// padStart 第一个参数是填充后的总长度，第二个参数是填充的内容
console.log(str.padStart(8, 'x'));
// 第二个参数不传，默认通过空格进行填充
console.log(str.padStart(8));

console.log(str.padEnd(8, 'y'));



// 实际应用场景：
// 1、月份、年份、日期
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = (now.getDate()).toString().padStart(2, '0')
console.log(`${year}-${month}-${day}`);


// 2、家里手机号
const tel = '13821982834'
const pawTel = tel.slice(-4).padStart(tel.length, '*')
console.log(pawTel);




// 伪逗号：Trailing commas

// 不写伪逗号：
// function foo (a, b, c) {
//   console.log(a, b, c);
// }
// foo (1, 2, 3)

// 书写伪逗号：
function foo (a, b, c, ) {
  console.log(a, b, c);
}
foo (1, 2, 3, )


// 为什么要用伪逗号：
// 在格式化代码时，有时可能会这样：
function foo (
  a,
  b,
  c
) {

}

// 这样如果使用 git 进行多人协作的时候，可能其他人对函数进行修改时，如果没有伪逗号，那么继续增加参数时就会多改一行（针对git而言）
