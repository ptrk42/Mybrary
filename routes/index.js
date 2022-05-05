const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/afr', (req,res) => {
  res.render('afr')
})

module.exports = router