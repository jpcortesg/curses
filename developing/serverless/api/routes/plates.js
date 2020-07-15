const express = require('express')

// Function of express
// Allows creating routes and passing them to the app
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello I\'m plates')
})

module.exports = router