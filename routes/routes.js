const express = require('express')
const UserController = require('../controllers/UserController')
const userRouter = require('./userRoute')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('test')
})

router.get('/register', UserController.register)

router.post('/register', UserController.postRegister)

router.get('/login', UserController.login)

// router.use('/user', userRouter)

module.exports = router