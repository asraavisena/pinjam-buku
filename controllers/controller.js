const { Book, UserBook } = require('../models/index');

class Controller {
  static getBookList(req, res) {
    Book.findAll()
    .then(data => {
      res.render(`booksList.ejs`, { data })
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
}

module.exports = Controller