'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserBook.init({
    UserId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER,
    // returnDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserBook',
  });
  return UserBook;
};