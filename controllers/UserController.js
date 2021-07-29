const {User} = require('../models')

class UserController {
    static register(req, res) {
        res.render('user/register')
    }

    static login(req, res) {
        res.render('user/login')
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
}

module.exports = UserController