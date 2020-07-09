const todos = [] // Array for save elements, searches for items already saved or leave an empty array

const render = () => { // Function to update indexes
  const todoList = document.getElementById('todo-list') // Save list
  const todoTemplate = todos.map(t => `<li>${t}</li>`) // Create the elements
  todoList.innerHTML = todoTemplate.join('') // Show the elements
  const elements = document.querySelectorAll('#todo-list li') // Save list items
  elements.forEach((element, i) => { // Cosnider all the elements
    element.addEventListener('click', () => { // Every time you click on an element
      element.parentNode.removeChild(element) // Remove elemnts of the list
      todos.splice(i, 1) // Remove elements of the array 
      updateTodos()
      render() // Update indexes
    })
  })
}

const updateTodos = (todos) => {
  const todosString = JSON.stringify(todos) // Save elements 
  localStorage.setItem('todos', todosString) // Save elements in the browser
}

window.onload = () => { // Load all HTML
  render() // update website with values
  const form = document.getElementById('todo-form') // Save form

  form.onsubmit = (e) => { // Every time you click on the form or press enter
    e.preventDefault(); // Prevent it from cooling
    const todo = document.getElementById('todo') // Save input
    const todoText = todo.value // Save the value the input
    todo.value = '' // Restart the value of input in blank
    todos.push(todoText) // Enter the value to array 'todos'
    updateTodos()
    render(); // Update indexes and prepare in caso of delete
  }
}