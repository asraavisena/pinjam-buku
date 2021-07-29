const express = require('express')
const UserController = require('../controllers/UserController')
const userRouter = require('./userRoute')
const auth = require('../middleware/auth')
const router = express.Router()
const Controller = require('../controllers/controller');

// router.use('/user', userRouter)
router.get('/', auth, (req, res) => {
    res.render('home.ejs')
})

router.get('/books/:id/rent', auth, Controller.rent)

router.get('/register', UserController.register)

router.post('/register', UserController.postRegister)

router.get('/login', UserController.login) // -> test1234

router.get('/logout', UserController.logout)

router.post('/login', UserController.postLogin)

router.get(`/books`, auth, Controller.getBookList)

router.use('/user', auth, userRouter)

module.exports = router