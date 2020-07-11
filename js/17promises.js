// Promises, called asynchronous

const applyDiscount = new Promise((resolve, reject) =>{
  setTimeout( () => {
    let discount = true

    if(discount){
      resolve('discount apply')
    }else{
      reject('not apply discount')
    }
  }, 3000)
})

applyDiscount.then(result => {
  console.log(result)
}).catch(err =>{
  console.log(err);
})