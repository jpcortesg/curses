const express = require('express') // Import express, to create web app
const morgan = require('morgan') // Import morgan, message for console
const exphbs = require('express-handlebars') // Import handlebars, template engine
const path = require('path') // Internal routes
const flash = require('connect-flash') // To alert, messages in global variables
const sesion = require('express-session') // To session
const MySQLStore = require('express-mysql-session') // To
const passport = require('passport')

const { database } = require('./keys') // To save in database, connection

// Initializations
const app = express() // Start app, express
require('./lib/passport')

// Settings
app.set('port', process.env.PORT || 4000) // Port assignment
app.set('views', path.join(__dirname, 'views')) // where are the views
app.engine('.hbs', exphbs({ // Settings of template
  defaultLayout: 'main', // Template main
  layoutsDir: path.join(app.get('views'), 'layouts'), // Where are the layouts
  partialsDir: path.join(app.get('views'), 'partials'), // Where are the partials
  extname: '.hbs', // To change to extension
  helpers: require('./lib/handlebars') // To require functions
}))
app.set('view engine', '.hbs') // To use the motor

// Middlewares
app.use(sesion({
  secret: 'jpcortesg',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}))
app.use(flash()) // To message in global variables
app.use(morgan('dev')) // For messages through the console
app.use(express.urlencoded({extends: false}))  // Accept from form the data the user
app.use(express.json()) // To receive json format
app.use(passport.initialize())
app.use(passport.session())

// Global variables
app.use((req, res, next) => {
  app.locals.success = req.flash('success') // To message in global for alert
  app.locals.message = req.flash('message') // To message in global for alert
  app.locals.user = req.user
  next()
})

// Routes
app.use(require('./routes/'))
app.use(require('./routes/authentication'))
app.use('/links', require('./routes/links'))

// Public files
app.use(express.static(path.join(__dirname, 'public'))) // Whre are the file public

// Starting  the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
