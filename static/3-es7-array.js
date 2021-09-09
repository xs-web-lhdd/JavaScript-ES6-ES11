// 数组扩展

// includes => boolean
// 两个参数 有搜索的值 搜索的索引(正数从前面开始找，负数从后面开始找)
// const arr = ['es6', 'es7', 'es8']
// // console.log(arr.includes('es5'));
// console.log(arr.includes('es8', 1)); // 搜索 es8 从索引为 1 的位置开始找
// console.log(arr.includes('es8', -1)); // 从倒数第一个开始往后面开始找
// console.log(arr.includes('es7', -1));



// indexOf => 索引位置（未找到返回-1）
// console.log(arr.indexOf('es7')); // 1

// const arr = ['es6', ['es7', 'es8'], 'es9']
// console.log(arr.includes(['es7', 'es8']));
// console.log(arr.indexOf(['es7', 'es8']));


const arr = [NaN]
console.log(arr.includes(NaN));
console.log(arr.indexOf(NaN));



// 总结：
// 1、两者只可以检测基本数据类型，且均是严格检查（2 跟 '2'不等）
// 2、includes可以检测NaN存在，而indexOf不可以检测NaN存在
// 3、includes返回是 true/false,indexOf返回索引位置（如果没找到返回-1）