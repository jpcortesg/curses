const express = require('express')
const router = express.Router()

const { isLoggedIn } = require('./../lib/auth')

const pool = require('./../database') // Connection to database

router.get('/', isLoggedIn, async(req, res) => {
  const links = await pool.query('SELECT * FROM links')
  res.render('links/list', { links })
})

router.get('/add', isLoggedIn, (req, res) => {
  res.render('links/add.hbs')
})

router.post('/add', isLoggedIn, async (req, res) => {
  const { title, url, description } = req.body
  const newLink = {
    title,
    url,
    description
  }
  await pool.query('INSERT INTO links set ?', [newLink])
  req.flash('success', 'Link save successfully')
  res.redirect('/links')
})

router.get('/delete/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params 
  await pool.query('DELETE FROM links where id = ?', [id])
  req.flash('success', 'Link Removed successfully')
  res.redirect('/links')
})

router.get('/edit/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params
  const links = await pool.query('SELECT * FROM links where id = ?', [id])
  res.render('links/edit', { link: links[0] })
})

router.post('/edit/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params
  const { title, description, url } = req.body
  const newLink = {
    title,
    description,
    url
  }
  await pool.query('UPDATE links SET ? WHERE id = ?', [newLink, id])
  req.flash('success', 'Links Update successfully')
  res.redirect('/links')
})

module.exports = router