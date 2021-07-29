function auth(req, res, next) {
    if(req.session.isLogin) {
        next()
    } else {
        res.redirect('/login')
    }
}

function isAdmin(req, res, next) {
    if(req.session.isAdmin) {
        next()
    } else {
        res.send('You should be an Admin to get here')
    }
}

module.exports = {auth, isAdmin}