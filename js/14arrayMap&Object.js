// Array and .map
const shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Hola']
console.log(shoppingCart)

// Show products in window of the web
// One Way to do it
const appContainer = document.querySelector('#app')

// let HTML = ''

// shoppingCart.forEach(product =>{
//   HTML += `<li>${product}</li>`
// })

// appContainer.innerHTML = HTML

// another way to do it
let HTML = shoppingCart.map(product =>{
  return `<li>El producto es ${product}</li>`
})

appContainer.innerHTML = HTML