const { Book } = require('../models/index');

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
}

module.exports = Controller