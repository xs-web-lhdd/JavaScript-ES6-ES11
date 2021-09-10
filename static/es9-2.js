// 对象的扩展：
//  Rest & Spread

const arr1 = [1, 2, 3]
const arr2 = [3, 4, 5]
const arr3 = [...arr1, ...arr2]
console.log(arr3);



const obj1 = {
  name: 'liang',
  age: 18
}
const obj2 = {
  school: 'imooc',
  age: 34
}

// 克隆对象：
const obj3 = {...obj1} // 深克隆
console.log(obj3);
obj1.age = 34


// 合并对象:
const obj4 = {...obj1, ...obj2} // 当属性冲突时，后面的属性将前面属性给覆盖了
console.log(obj4);



const obj5 = {
  school: 'imooc',
  age: 3,
  course: 'ES'
}
const { age, ...rest } = obj5 // 剩余运算符只能放在最后面，跟数组一样
console.log(age);
console.log(rest);