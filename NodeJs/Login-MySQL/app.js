const express = require('express')
const path = require('path')
const mysql = require('mysql') 
const dotenv = require('dotenv') // To private data
const cookieParser = require('cookie-parser')

const app = express()

dotenv.config({ path: './.env' }) // To connect to .env

const db = mysql.createConnection({ // Parameter to connrction 
  host: process.env.DATABASE_HOST, // Call something from .env
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
})

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.set('view engine', 'hbs') // Configurar motor de plantilla

db.connect( (error) => { // Establish connection
  if(error){
    console.log(error);
  }else{
    console.log('MySQL Conncected...');
  }
})

// Define routes 
app.use('/', require('./routes/pages.js'))
app.use('/auth', require('./routes/auth'))

app.listen(5000, () => {
  console.log('Server started on Port 5000');
})