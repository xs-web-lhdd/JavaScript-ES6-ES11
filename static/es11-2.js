// BigInt

// const max = 2 ** 53
// console.log(max); // 最大值

// console.log(max === max + 1); // true

// console.log(Number.MAX_SAFE_INTEGER);




const bigInt = 9007199254740993n
console.log(typeof bigInt); // bigint

const bigInt2 = BigInt(9007199254740993n)
console.log(bigInt2);


console.log(bigInt + bigInt2);
console.log((bigInt + bigInt2).toString());





console.log(1n == 1); // true
console.log(1n === 1); // false