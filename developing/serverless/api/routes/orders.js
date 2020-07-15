const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello I\'m orders')
})

module.exports = router