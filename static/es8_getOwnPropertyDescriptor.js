// 对象属性描述符

// const obj = {
//   name: 'imooc',
//   course: 'es'
// }

// 后面有一个 s ！！！！！！！！！！！！！！
// const desc = Object.getOwnPropertyDescriptors(obj)
// console.log(desc);


const obj = {}
Reflect.defineProperty(obj, 'name', {
  value: 'hello',
  writable: false,  // 能否被更改
  configurable: false, // 该属性不能被 delete 删除
  enumerable: false  // 能否通过for ... in 循环遍历出来
})
Reflect.defineProperty(obj, 'age', {
  value: 18,
  writable: false,  // 能否被更改
  configurable: false, // 该属性不能被 delete 删除
  enumerable: false  // 能否通过for ... in 循环遍历出来
})
// obj.name = 'liang'
// delete obj.name
// console.log(obj);
for (let key in obj) {
  console.log(key);
}



// 输出对象中所有属性的描述
console.log(Object.getOwnPropertyDescriptors(obj));
// 输出对象中单个属性的描述（该例子中输出 name 属性的描述）
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));