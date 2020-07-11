// Destructuring of Object
const learnJS = {
  version : {
    nueva : 'ES6',
    anterior : 'ES5'
  },
  framework : ['React', 'VueJS', 'Angular'],
}

// Extract values of a object
// console.log(learnJS)
let version = learn.version.nueva // Earlier version
let framework = learn.framework[1]

// Extract values with Destructuring
let {nueva} = learnJS.version
console.log("nueva", nueva)
