'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
      id: 1,
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'publisher',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'editor',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: 'viewer',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};