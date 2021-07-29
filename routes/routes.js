const express = require('express')
const UserController = require('../controllers/UserController')
const auth = require('../middleware/auth')
const userRouter = require('./userRoute')
const router = express.Router()
const Controller = require('../controllers/controller');

// router.use('/user', userRouter)
router.get('/', auth, (req, res) => {
    res.render('home.ejs')
})

router.get('/register', UserController.register)

router.post('/register', UserController.postRegister)

router.get('/login', UserController.login) // -> test1234

router.post('/login', UserController.postLogin)



router.get(`/books`, Controller.getBookList)

module.exports = router