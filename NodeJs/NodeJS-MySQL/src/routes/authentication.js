const express = require('express')
const router = express.Router() // To routes

const passport = require('passport')
const { isLoggedIn } = require('../lib/auth')
const { isNotLoggedIn } = require('../lib/auth')

router.get('/signin', isNotLoggedIn, (req, res) => {
  res.render('auth/signin')
})

router.post('/signin', (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next)
})

router.get('/signup', (req, res) => { // Show page
  res.render('auth/signup')
})

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile', 
  failureRedirect: '/signup',
  failureFlash: true
}))

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile')
})

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/signin')
})

module.exports = router

