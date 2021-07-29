'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let data = [
      {
        name: 'Toni x',
        email: 'toni@test.com',
        password: 'test1234',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joni A',
        email: 'joni@test.com',
        password: 'test1234',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vudi B',
        email: 'vudi@test.com',
        password: 'test1234',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dinda z',
        email: 'dinda@test.com',
        password: 'test1234',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'admin teset',
        email: 'admin@test.com',
        password: 'test1234',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    
    return queryInterface.bulkInsert('Users', data, {})

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});

  }
};
