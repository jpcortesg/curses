const express = require('express')
const colors = require('colors')

const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Hello world with express and Node Js</h1>')
  res.end()
})

server.listen(3000, () => {
  console.log('Server on port 3000'.red);
})