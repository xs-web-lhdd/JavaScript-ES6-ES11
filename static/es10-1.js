// 对象扩展：


// const obj = {
//   name: 'imooc',
//   course: 'ES'
// }

// const entries = Object.entries(obj)
// console.log(entries); // 二维数组 里面第一项是 键 第二项是值


// const fromEntries = Object.fromEntries(entries)
// console.log(fromEntries);
// fromEntries 和 entries 作用刚好相反，一个把对象变成二维数组，另一个把数组再变回成对象




// 应用场景： #############################################

// 把 map 结构转化成对象结构：
// const map = new Map()
// map.set('name', 'liang')
// map.set('course', 'ES')
// console.log(map);
// const fromEntries = Object.fromEntries(map)
// console.log(fromEntries);

// 
const course = {
  math: 80,
  english: 84,
  chinese: 90
}
// 得到分数大于 80 的场景：
const arr = Object.entries(course).filter(([key, val]) => val > 80)
// 再将数组转化为对象：
const res = Object.fromEntries(arr)
console.log(res);