let mealState = []

const stringToHTML = (str) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  return doc.body.firstChild
}

const renderItem = (item) => {
  const elemnt = stringToHTML(`<li data-id=${item._id}>${item.name}</li>`)

  elemnt.addEventListener('click', () => {
    const mealsList = document.getElementById('meals-list')
    Array.from(mealsList.children).forEach(x => x.classList.remove('selected'))
    elemnt.classList.add('selected')
    const mealsIdInput = document.getElementById('meals-id')
    mealsIdInput.value = item._id;
  })

  return elemnt
}

const renderOrder = (order, meals) => {
  const meal = meals.find(meal => meal._id === order.meal_id)
  const elemnt = stringToHTML(`<li data-id=${order._id}>${meal.name} - ${order.user_id}</li>`)

  return elemnt;
}

window.onload = () => {
  const orderForm = document.getElementById('order')
  orderForm.onsubmit = (e) => {
    e.preventDefault()
    const submit = document.getElementById('submit')
    submit.setAttribute('disabled', true)
    const mealsId = document.getElementById('meals-id')
    const mealsIdValue = mealsId.value;
    if(!mealsIdValue){
      alert('select a meals')
      return
    }
    
    const order = {
      meal_id : mealsIdValue,
      user_id : 'Jennifer Lopez' 
    }

    fetch('https://project.jpcortesg.vercel.app/api/orders', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(order)
    }).then(x => x.json())
      .then(res => {
        const rendereOrder = renderOrder(res, mealState)
        const orderList = document.getElementById('orders-list')
        orderList.appendChild(rendereOrder)
        submit.removeAttribute('disabled')
      })
  }

  fetch('https://project.jpcortesg.vercel.app/api/meals')
    .then(response => response.json())
    .then(data => {
      mealState = data
      const mealsList = document.getElementById('meals-list')
      const submit = document.getElementById('submit')
      const listItems = data.map(renderItem)
      mealsList.removeChild(mealsList.firstElementChild)
      listItems.forEach(element => {
        mealsList.appendChild(element)
      })
      submit.removeAttribute('disabled')
      fetch('https://project.jpcortesg.vercel.app/api/orders')
        .then(response => response.json())
        .then(ordersData => {
          const orderList = document.getElementById('orders-list')
          const listOrder = ordersData.map(orderData => renderOrder(orderData, data))
          orderList.removeChild(orderList.firstElementChild)
          listOrder.forEach(element => orderList.appendChild(element))
          console.log(ordersData);
        })
    })
}