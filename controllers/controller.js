const { Book, UserBook } = require('../models/index');

class Controller {
  static getBookList(req, res) {
    Book.findAll()
    .then(data => {
      res.render(`booksList.ejs`, { data, isAdmin: req.session.isAdmin })
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }

  static rent(req, res) {
    const paramsId = Number(req.params.id)
    Book.decrement("stock", {
      where: {
        id: paramsId
      }
    })
      .then(() => {
        let data = {
          UserId: req.session.userId,
          BookId: paramsId
        }
        return UserBook.create(data)
      })
      .then(() => {
        res.redirect('/books')
      })
      .catch(err => {
        console.log(err);
        res.send(err)
      })
  }

  static getAddBook(req, res) {
    res.render(`addBook.ejs`)
  }

  static postAddBook(req, res) {
    Book.create({
      name: req.body.name,
      penulis: req.body.penulis,
      category: req.body.category,
      description: req.body.description,
      urlImage: req.body.urlImage,
      stock: req.body.stock
    })
    .then(_ => {
      res.redirect(`/books`)
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }

  static getDeleteBook(req, res) {
    const id = req.params.id
    Book.destroy({ where: { id }})
    .then(_ => {
      res.redirect(`/books`)
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }
  static getEditBook(req, res) {
    Book.findDataByPkUsingStaticMethod(req.params.id)
    .then(data => {
      res.render(`editBook.ejs`, { data })
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }

  static postEditBook(req, res) {
    const id = req.params.id
    Book.update({
      name: req.body.name,
      penulis: req.body.penulis,
      category: req.body.category,
      description: req.body.description,
      urlImage: req.body.urlImage,
      stock: req.body.stock
    }, { where: { id }})
    .then(_ => {
      res.redirect(`/books`)
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    })
  }
}

module.exports = Controller