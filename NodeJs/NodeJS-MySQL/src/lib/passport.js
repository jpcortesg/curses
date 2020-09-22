const passport = require('passport')
const localStrategy =  require('passport-local').Strategy

const pool = require('./../database') // Connect to data base
const helpers = require('./../lib/helpers') // To code

passport.use('local.signup', new localStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback:  true
  },
  async (req, username, password, done) => {
    const { fullname } = req.body // Save data
    const newUser = {
      username,
      password,
      fullname
    }

    newUser.password = await helpers.encryptPassword(password) // Code password
    const result = await pool.query('INSERT INTO users SET ?', [newUser]) // Save in database
    newUser.id = result.insertId
    return done(null, newUser)
  }
))

passport.serializeUser((user, done) => {
  done(null, user.id) 
})

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id])
  done(null, rows[0])
})