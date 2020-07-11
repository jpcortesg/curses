const downloadUsers = quantity => new Promise((resolve, reject) => {
  
  // Spend amount to api
  const api = `https://randomuser.me/api/?results=${quantity}&nat=col`

  const xhr = new XMLHttpRequest() // Celled ajax

  xhr.open('GET', api, true) // Open conection

  // On load
  xhr.onload = () => { // Review answer
    if(xhr.status === 200){ // Generally check for status
      resolve(JSON.parse(xhr.responseText).results) // Change of String to Object
    }else{
      reject(Error(xhr.statusText))
    }
  }

  // Optional
  xhr.onerror = (error) => reject(error)

  // Send
  xhr.send()
})

downloadUsers(30)
  .then(
    members => console.log(members),
    error => console.error('There was a mistake' + error)
  )