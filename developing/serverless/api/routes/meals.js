const express = require('express')
const Meals = require('../models/Meals')

// Function of express
// Allows creating routes and passing them to the app
const router = express.Router()

router.get('/', (req, res) => {
  Meals.find()
    .exec()
    .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
  Meals.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
  Meals.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req, res) =>{
  Meals.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id', (req, res) => {
  Meals.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router