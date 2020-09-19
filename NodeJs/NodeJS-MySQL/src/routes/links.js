const express = require('express')
const router = express.Router()

const pool = require('./../database') // Connection to database

router.get('/add', (req, res) => {
  res.render('links/add.hbs')
})

router.post('/add', (req, res) => {
  res.send('Received')
})

module.exports = router