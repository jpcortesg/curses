// Methods in arrays
const persons = [
  { name : 'Juan', age : 19, learning : 'JavaScript'},
  { name : 'Pablo', age : 23, learning : 'PHP'},
  { name : 'Alejandra', age : 35, learning : 'AdobeXD'},
  { name : 'Karla', age : 20, learning : 'Python'},
  { name : 'Natalia', age : 29, learning : 'ReactJS'}
]

// Over 28 years
const over = persons.filter(person =>{
  return person.age > 21
})

over.map(person => {
  console.log(`${person.name} is over to 21 years`);
})

// What does Alejandra and her age learn
const alejandra = persons.find(person =>{
  return person.name === 'Alejandra'
})

console.log(`${alejandra.name} is learning: ${alejandra.learning} and your age is ${alejandra.age}`)

// Sum all age
let ageSum = persons.reduce((ageTotal, person) => {
  return ageTotal + person.age
}, 0) 

console.log(ageSum)