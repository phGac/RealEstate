'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      { id: 1, idBroker: 1, idProperty: 1, description: '', status: 1, createdAt: new Date, updatedAt: new Date },
      { id: 2, idBroker: 3, idProperty: 2, description: '', status: 1, createdAt: new Date, updatedAt: new Date },
      { id: 3, idBroker: 3, idProperty: 3, description: '', status: 1, createdAt: new Date, updatedAt: new Date },
      { id: 4, idBroker: 3, idProperty: 4, description: '', status: 0, createdAt: new Date, updatedAt: new Date },
      { id: 5, idBroker: 1, idProperty: 5, description: '', status: 1, createdAt: new Date, updatedAt: new Date },
      { id: 6, idBroker: 3, idProperty: 6, description: '', status: 0, createdAt: new Date, updatedAt: new Date },
      { id: 7, idBroker: 3, idProperty: 7, description: '', status: 0, createdAt: new Date, updatedAt: new Date },
      { id: 8, idBroker: 1, idProperty: 8, description: '', status: 1, createdAt: new Date, updatedAt: new Date },
      { id: 9, idBroker: 1, idProperty: 9, description: '', status: 0, createdAt: new Date, updatedAt: new Date },
      { id: 10, idBroker: 3, idProperty: 10, description: '', status: 1, createdAt: new Date, updatedAt: new Date },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
