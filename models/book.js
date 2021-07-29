'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    getSummary() {
      return `${this.name.toUpperCase()} - ${this.penulis.toUpperCase()}`
    }
    static findDataByPkUsingStaticMethod(id) {
      return Book.findByPk(id)
    }
  };
  Book.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    urlImage: DataTypes.STRING,
    penulis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};