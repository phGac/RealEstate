'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Properties', [
      { id: 1, idOwner: 1, type: 'house', idFeature: 1, direction: 'direction 1', price: 15000000, for: 'sell', createdAt: new Date, updatedAt: new Date },
      { id: 2, idOwner: 6, type: 'house', idFeature: 2, direction: 'direction 2', price: 23000000, for: 'rent', createdAt: new Date, updatedAt: new Date },
      { id: 3, idOwner: 6, type: 'apartament', idFeature: 3, direction: 'direction 3', price: 13000000, for: 'sell', createdAt: new Date, updatedAt: new Date },
      { id: 4, idOwner: 7, type: 'house', idFeature: 4, direction: 'direction 4', price: 45000000, for: 'sell', createdAt: new Date, updatedAt: new Date },
      { id: 5, idOwner: 7, type: 'apartament', idFeature: 5, direction: 'direction 5', price: 12000000, for: 'rent', createdAt: new Date, updatedAt: new Date },
      { id: 6, idOwner: 8, type: 'house', idFeature: 6, direction: 'direction 6', price: 30000000, for: 'sell', createdAt: new Date, updatedAt: new Date },
      { id: 7, idOwner: 7, type: 'apartament', idFeature: 7, direction: 'direction 7', price: 10000000, for: 'sell', createdAt: new Date, updatedAt: new Date },
      { id: 8, idOwner: 9, type: 'house', idFeature: 8, direction: 'direction 8', price: 8000000, for: 'rent', createdAt: new Date, updatedAt: new Date },
      { id: 9, idOwner: 9, type: 'house', idFeature: 9, direction: 'direction 9', price: 7000000, for: 'sell', createdAt: new Date, updatedAt: new Date },
      { id: 10, idOwner: 9, type: 'mansion', idFeature: 10, direction: 'direction 10', price: 1300000000, for: 'sell', createdAt: new Date, updatedAt: new Date },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
