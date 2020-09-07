const express = require('express')
const router = express.Router() // For exports routes

// Routes
router.get('/', (req, res) =>{
  res.render('index', {title: 'First Website'})
})

router.get('/contact', (req, res) =>{
  res.render('contact', {title: 'Contact'})
})

module.exports = router // Exports Routes

