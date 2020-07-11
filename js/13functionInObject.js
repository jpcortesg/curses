// Methods or Functions in Objects
const person = {
  name : 'Juan',
  job : 'Web Developer',
  age : 19,
  music : 'salsa',
  showInformation(){
    console.log(`${this.name} is ${this.job} and your job is ${this.job}. Your favorite music is ${this.music}`);
  }
}

// Call the object function
person.showInformation();