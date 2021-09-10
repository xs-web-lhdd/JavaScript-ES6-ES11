// Promise 扩展：
// Promise.allSettled()
// 


// Promise.all() 的缺陷: 当都成功的时候才成功,只要一个失败就认定为失败(如果失败就看不到其他成功的信息,不知道数组中其他Promise的状态)解决
// 方案: Promise.allSettled(),返回所有信息,无论成功还是失败均可看到每一项的信息



// Promise.all() 里面有一项失败,只能看到失败的信息
Promise.all([
  Promise.resolve({
    code: 200,
    data: [1, 2, 3]
  }),
  Promise.reject({
    code: 500,
    // data: [4, 5, 6]
  }),
  Promise.resolve({
    code: 200,
    data: [7, 8, 9]
  })
]).then(res => {
  console.log(res);
  console.log('成功');
}).catch(err => {
  console.log(err);
  console.log('失败');
})



// 通过 Promise.allSettled() 进行解决,可以看到所有信息(无论成功还是失败)
Promise.allSettled([
  Promise.resolve({
    code: 200,
    data: [1, 2, 3]
  }),
  Promise.reject({
    code: 500,
    // data: [4, 5, 6]
  }),
  Promise.resolve({
    code: 200,
    data: [7, 8, 9]
  })
]).then(res => {
  console.log(res);
  console.log('成功');
}).catch(err => {
  console.log(err);
  console.log('失败');
})





Promise.allSettled([
  Promise.resolve({
    code: 200,
    data: [1, 2, 3]
  }),
  Promise.reject({
    code: 500,
    // data: [4, 5, 6]
  }),
  Promise.resolve({
    code: 200,
    data: [7, 8, 9]
  })
]).then(res => {
  // 筛选出成功的状态
  const msg = res.filter(item => item.status === 'fulfilled')
  console.log(msg);
  // 筛选出失败的状态:
  const errMsg = res.filter(item => item.status === 'rejected')
  console.log(errMsg);
}).catch(err => {
  console.log(err);
  console.log('失败');
})
