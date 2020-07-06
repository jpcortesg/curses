console.log('Hello World!!')

// Types of data in Js
// String: Character String
let string = 'Hello World!!'

// Boolean:  True and False
let isBoolean = true

// Number: any number 
let number = 23

// '123' -> String != 123 -> Number

// null -> its value is null != its value is not defined

// Object: set of values

// 'var' -> it is to avoid it, because when that is defined is taken to the start
var variableVar = 'My first variable'

// 'let' -> the best option for declare variables
let variableLet = 'My second variable'

// 'Const' -> this take a value and no is possible change you
const isThree = 3

// console.log('Variable var: ' + variableVar)
// console.log('Variable let: ' + variableLet)
// console.log('Const: ' + isThree)

// this is mutability
variableLet = 'This Change'
// console.log('after of change ' + variableLet)

// Example of boolean
let myBoolean = true
let otherBoolean = false

// This is definition of number
let myNumber = 0
let myNumber2 = 12
let myNumber3 = -234

// Variable undef 
let undef
// console.log("undef", undef)

// Object is a group of data
const myfirstObject = {}

// other object
const myObject = {
  aNumber : 12, // Property : value
  aString : 'This is a character string',
  aCondition : true, // put comma "," at the end, good practice
}

// console.log(myObject);

// array
const arrVacion = []
// console.log("arrvacion", arrvacion)

const arr = [1, 2, 'hola', 'mundo', myObject]
// console.log("arr", arr)

// add element to my arrar at the end
arr.push(5)
// console.log("arr", arr)

arrVacion.push(5)
arrVacion.push(3)
arrVacion.push(1)
arrVacion.push('Hola')
arrVacion.push(variableLet)

// console.log("arrVacion", arrVacion)

// The list is a subset of to array, where all the elements are equals

// Callback
function sumar(a, b, cb){
  const result = a + b;
  cb(result)
}

function callback(result){
  console.log(`Result: ${result}`);
}

// sumar(2, 3, callback)

const arrow = (nena) => console.log(nena);

// arrow('Hola')
