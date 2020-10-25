const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 8080
let corsOption = {
  origin: "http://localhost:8081"
}

// Settings
app.set('port', port)


// Middleware
app.use(morgan('dev'))
app.use(cors(corsOption))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// const db = require('./models')
// const Role = db.role

// db.sequelize.sync().then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }



// Routes
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to bezkoder application"
  })
})

// Listen port
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})