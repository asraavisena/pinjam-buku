'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
const nodemailer = require('nodemailer');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Book, { through: 'UserBooks' })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email should be unique'
      }
    },
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((data, options) => {
    data.password = hashPassword(data.password)
    data.isAdmin = false
  })
  User.afterCreate((data, options) => {
    // menghubungkan ke gmail
    let transporter = nodemailer.createTransport({
      service: `gmail`,
      auth: {
        user: `serititiga@gmail.com`,
        pass: `serititiga@610`
      }
    });

    // isi email
    let mailOptions = {
      from: `serititiga@gmail.com`,
      to: `${data.email}`,
      subject: `Selamat kamu sudah terdaftar di Pinjem Buku Online Qita`,
      text: `anjaaaaaaaaaaaay udah terdaftar. Langsung sikat buku - buku kita. Tapi kalo nanti jangan lupa dibalikin!`
    };

    // eksekusi
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent!!`);
      }
    })
  })
  return User;
};