// Spread Operator
let language = ['JavaScript', 'PHP', 'Python']
let framework = ['React', 'Laravel', 'Django']

// Concatenate of arrays
let combination = language.concat(framework) // First way

let combination2 = [...language,...framework] // Second way

// Copie Array
let copie = language // First way

let copie2 = [...language] // Second Way

// Last of Array
let [last] = language.reverse() // First way, affects the array original

let [last2] = [...language].reverse() // Second way, not affects the original array

function sum (a, b, c){
  console.log(a + b + c);
}

const numbers = [1, 2, 3]

sum(...numbers) // Separate an array for parameters