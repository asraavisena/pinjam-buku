const express = require('express')
const UserController = require('../controllers/UserController')
const auth = require('../middleware/auth')
const userRouter = require('./userRoute')
const router = express.Router()

router.get('/', auth, (req, res) => {
    res.send('test')
})

router.get('/register', UserController.register)

router.post('/register', UserController.postRegister)

router.get('/login', UserController.login) // -> test1234

router.post('/login', UserController.postLogin)


// router.use('/user', userRouter)

module.exports = router