// 数组扩展：
// Array.prototype.flat() 数组扁平化
// Array.prototype.flatMap()


// const arr = [1, 2, 3, 4, 5, 6, 7, [10, 11, 4, 6], [1, 3, [1, 3, 5]]]

// console.log(arr.flat()); // 扁平化一级
// console.log(arr.flat().flat()); // 扁平化二级


// console.log(arr.flat(2)); // 扁平化二级
// console.log(arr.flat(Infinity)); // 无限扁平化 --- 一般根据数组级数传入相应数值进行扁平化，一般不用Infinity



// 
// const arr = [1, 2, 3, 4]
// const res = arr.map(x => [x + 1]).flat()
// console.log(res);


// flatMap:
const arr  = [1, 2, 3, 4]
const res = arr.flatMap(x => [x + 1])
console.log(res);
