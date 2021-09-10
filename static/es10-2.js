// es10 字符串扩展：

const str = '    imooc    '

console.log(str);
// 去除空格：
// 正则：
console.log(str.replace(/^\s+/g, '')); // 去除前面空格
console.log(str.replace(/\s+$/g, '')); // 去除后面空格


// 使用 es10： String.prototype.trimStart()
console.log(str.trimStart()); // 去除前面空格
console.log(str.trimLeft()); // 去除前面空格

console.log(str.trimEnd()); // 去除后面空格
console.log(str.trimRight()); // 去除后面空格

console.log(str.trim()); // 去除所有空格
