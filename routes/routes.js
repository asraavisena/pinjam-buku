const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller');

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.get(`/books`, Controller.getBookList)


module.exports = router