const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send({"tittle":"Hello World"})
})

router.get('/test', (req, res) => {
  const data = {
    'name':'Juan',
    'web': 'Juan.com'
  }
  res.json(data)
})



module.exports = router;