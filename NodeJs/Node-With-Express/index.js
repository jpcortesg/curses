const express = require('express')
const morgan = require('morgan')

const app = express()

// Settings
app.set('appName', 'Express tutorial')
app.set('port', 3000)
app.set('view engine', 'ejs')

// const logger = (req, res, next) => { s
//   console.log(`Rout received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//   next()
// }

// middleware
app.use(morgan('dev')) 

app.use(express.json())
// app.use(logger)

// Routes

app.get('/', (req, res) => {
  const data = [{name: 'Jazmine'},{name: 'Cameron'},{name: 'Will'}, {name: 'Bryan'}]
  res.render('index.ejs', {people: data})
})

// app.all('/user', (req, res, next) => {
//   console.log('passed through here');
//   next()
// })

app.get('/user', (req, res) => { // When you call get this happens
  res.json({
    username: 'Cameron',
    lastname: 'Smith'
  })
  res.end()
})

app.post('/user/:id', (req, res) => { // When you call get this happens
  console.log(req.body);
  console.log(req.params);
  res.send('Post Reques Received')
  res.end()
})

app.put('/user/:id', (req, res) => { // When you call get this happens
  console.log(req.body);
  res.send(`User ${req.params.id} update`)
  res.end()
})

app.delete('/user/:userId', (req, res) => { // When you call get this happens
  res.send(`User ${req.params.userId} deleted`)
  res.end()
})

app.use(express.static('public'))

// Call Server
app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Server on port ', app.get('port'));
})