// Export variable
// export const nameTask = 'walking the dog'
// const task = 'task'

// Export function
// export const createTask = (task, urgency) =>{
//   return `The task ${task} have a urgency of ${urgency}`
// }

// Export class
// export default class Task{
class Task{

  constructor(name, priority){
    this.name = name
    this.priority = priority
  }

  show(){
    console.log(`${this.name} have of priority of ${this.priority}`)
  }
}

// Export class heritage 
export default class PendingPurchases extends Task{
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