const express = require('express')
const path = require('path') // For routes in the pc
const app = express()

// Settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views')) // To know where the view is
app.set('view engine', 'ejs') // For read files .ejs

// Middlewares

// Routes
app.use(require('./routes'))

// Statics files
app.use(express.static(path.join(__dirname, 'public')))

// Listening the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})