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
router.get(`/books/add`, Controller.getAddBook)
router.post(`/books/add`, Controller.postAddBook)
router.get(`/books/:id/edit`, Controller.getEditBook)
router.post(`/books/:id/edit`, Controller.postEditBook)

router.get(`/books/:id/delete`, Controller.getDeleteBook)

module.exports = router