const express = require('express')
const UserController = require('../controllers/UserController')
// const auth = require('../middleware/auth')
const router = express.Router()


router.get('/borrowedBook', UserController.borrowedBook)

router.get('/return/:id', UserController.return)

// router.get('/login', UserController.register)


module.exports = router