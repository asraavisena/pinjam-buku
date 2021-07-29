const express = require('express')
const router = require('./routes/routes')
const session = require('express-session')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))
app.use(router)

app.listen(port, () => {
    console.log(`Your app is listening to the port ${port}`)
})