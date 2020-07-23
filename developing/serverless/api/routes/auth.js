const express = require('express')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const Users = require('../models/Users')
const { isAuthenticated } = require('../auth')

const router = express.Router()

const signToken = (_id) => {
  return jwt.sign({ _id }, 'My secret', {
    expiresIn : 60 * 60 * 24 * 365,
  })
}

router.post('/register', (req, res) => {
  const {email, password} = req.body
  crypto.randomBytes(16, (err, salt) => {
    const nweSalt = salt.toString('base64')
    crypto.pbkdf2(password, nweSalt, 10000, 64, 'sha1', (err, key) => {
      const encryptedPassword = key.toString('base64')
      Users.findOne({ email }).exec()
        .then(user => {
          if(user){
            return res.send('User already exists')
          }
          Users.create({
            email,
            password: encryptedPassword,
            salt: nweSalt
          }).then(() => {
            res.send('User created with exit')
          })
        })
    })
  })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  Users.findOne({ email }).exec()
    .then(user => {
      if(!user){
        return res.send('Incorrect username and/or password')
      }
      crypto.pbkdf2(password, user.salt, 10000, 64, 'sha1', (err, key) => {
        const encryptedPassword = key.toString('base64')
        if(user.password === encryptedPassword){
          const token = signToken(user._id)
          return res.send({ token })
        }
        res.send('Incorrect username and/or password')
      })
    })
})

router.get('/me', isAuthenticated, (req, res) => {
  res.send(req.user)
})

module.exports = router