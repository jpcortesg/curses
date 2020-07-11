// Library to facilitate the construction work of apis
const express = require('express') // To import dependencies
const app = express() // Create application of express

app.get('*', (request, response) => { 
  response.send({ message : 'Hellow World!!' })
})

// Start out server
app.listen(3000, () => console.log('our server is listening on port 3000'))

