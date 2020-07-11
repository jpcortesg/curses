// Variables
let NamePerson = 'Juan'
let job = 'Web Developer'

// Object Literal Key : Value
const person = {
  name : 'Juan',
  job : 'Web Developer',
  edad : 19,
}

// Object Constructor
function Activity(nombre, urgency){
  this.nombre = nombre;
  this.urgency = urgency;
}

// Add prototype to Activity
// Function show activity
Activity.prototype.showInformationActivity =
function (){
  return `The activity: ${this.nombre}. Have urgency of ${this.urgency}`
}

// Create new activity
const activity1 = new Activity('Learn Js', 'Urgent')

console.log("activity1: ", activity1.showInformationActivity())