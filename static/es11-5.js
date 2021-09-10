// 可选链： ?.


const user = {
  address: {
    street: 'xxx街道',
    getNum() {
      return '80号'
    }
  }
}

// 之前的写法：
// const street = user && user.address && user.address.street
// console.log(street);

// const Num = user && user.address && user.address.getNum()
// console.log(Num);

// 可选链的写法：
const street = user?.address?.street
console.log(street);

const num = user?.address?.getNum()
console.log(num);

// 注意: ?. 是一个符号,中间不能敲空格



