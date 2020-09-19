const express = require('express') 
const router = express.Router() // To create routes

router.get('/', (req, res) => {
  res.send('Hello World')
})

module.exports = router