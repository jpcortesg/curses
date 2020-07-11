// How to write class in Js
class Task{

  constructor(name, priority){
    this.name = name
    this.priority = priority
  }

  show(){
    console.log(`${this.name} have of priority of ${this.priority}`)
  }
}

// Create a new object 
let task1 = new Task('learning JS', 'high')
let task2 = new Task('prepare coffee', 'normal')
let task3 = new Task('walk the dog', 'normal')
let task4 = new Task('meet my in-laws', 'low')

// heritage 
class PendingPurchases extends Task{
  constructor(name, priority, quantity){
    // Call father
    super(name, priority)
    this.quantity = quantity
  }

  show(){
    super.show();
    console.log(`and the quantity of ${this.quantity}`)
  }

  hello(){
    return 'hola'
  }
}

let purchase1 = new PendingPurchases('soap', 'urgent', 3)

purchase1.show()

console.log("purchase1", purchase1)