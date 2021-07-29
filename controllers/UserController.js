const { checkPassword } = require('../helpers/bcrypt')
const {User, Book, UserBook} = require('../models')

class UserController {
    static register(req, res) {
        res.render('user/register')
    }

    static postRegister(req, res) {
        let data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        User.create(data)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err.errors[0].message)
        })
    }

    static login(req, res) {
        res.render('user/login')
    }

    static postLogin(req, res) {
        let {email, password} = req.body
        User.findOne({
            where: {
                email: email
            }
        })
            .then(data => {
                if(data) {
                    const isPassMatch = checkPassword(password, data.password)
                    if(isPassMatch) {
                        req.session.isLogin = true
                        req.session.userId = data.id
                        req.session.isAdmin = data.isAdmin
                        res.redirect('/')
                    } else {
                        res.send('Password or Email is wrong')
                    }
                } else {
                    res.send('Password or Email is wrong')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res) {
        req.session.destroy( () => {
            res.redirect('/login')
        })
    }

    static borrowedBook(req, res) {
        // console.log(req.session.userId, '<<<<<<<<<<');
        User.findByPk(req.session.userId, {
            include: [Book]
        })
            .then(data => {
                // res.send(data)
                res.render('user/borrowedBook', {data, isAdmin: req.session.isAdmin})
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

    static return(req, res) {
        console.log(req.params.id);
        const paramsId = Number(req.params.id)
  
        Book.findByPk(paramsId)
            .then((data) => {
                let change = {
                    stock: Number(data.stock) + 1
                }
                return Book.update(change, {
                    where: {
                        id: paramsId
                    }
                })
            })
            .then(()  => {
                return UserBook.destroy({
                    where: {
                        UserId: req.session.userId,
                        BookId: paramsId
                    }
                })
            })
            .then((data) => {
                // res.send(data)
                res.redirect('/user/borrowedBook')
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }
}

module.exports = UserController