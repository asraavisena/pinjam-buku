const { checkPassword } = require('../helpers/bcrypt')
const {User} = require('../models')

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
            res.send(err)
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
                        // req.session.isAdmin = data.isAdmin
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
}

module.exports = UserController