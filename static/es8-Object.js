const obj = {
  name: 'imooc',
  web: 'www.baidu.com',
  course: 'es'
}

// console.log(Object.keys(obj));

// 以前获取对象里面的值
const values = Object.keys(obj).map(item => obj[item])
// console.log(values);

// 使用.values获取值
// console.log(Object.values(obj));


// Object.entries 对对象的处理
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

// 传入数组 --- 第一个是下标，第二个是值
console.log(Object.entries(['1', '2']));



