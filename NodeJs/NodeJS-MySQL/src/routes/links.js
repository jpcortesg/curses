const express = require('express')
const routes = express.Router()

const pool = require('./../database') // Connection to database

module.exports = routes