'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PropertyFeatures', [
      { id: 1, countRooms: 3, countBaths: 2, countPools: 0, countGarages: 1, countFloors: 1, backyard: true, frontyard: false, privatePool: false, squareMetersTotal: 1000, squareMetersUsable: 750, createdAt: new Date, updatedAt: new Date },
      { id: 2, countRooms: 5, countBaths: 2, countPools: 0, countGarages: 1, countFloors: 2, backyard: true, frontyard: false, privatePool: false, squareMetersTotal: 2000, squareMetersUsable: 1500, createdAt: new Date, updatedAt: new Date },
      { id: 3, countRooms: 4, countBaths: 1, countPools: 1, countGarages: 0, countFloors: 2, backyard: false, frontyard: true, privatePool: true, squareMetersTotal: 700, squareMetersUsable: 422, createdAt: new Date, updatedAt: new Date },
      { id: 4, countRooms: 2, countBaths: 1, countPools: 0, countGarages: 0, countFloors: 1, backyard: true, frontyard: false, privatePool: false, squareMetersTotal: 1000, squareMetersUsable: 750, createdAt: new Date, updatedAt: new Date },
      { id: 5, countRooms: 3, countBaths: 1, countPools: 0, countGarages: 0, countFloors: 0, backyard: true, frontyard: true, privatePool: false, squareMetersTotal: 2100, squareMetersUsable: 1700, createdAt: new Date, updatedAt: new Date },
      { id: 6, countRooms: 3, countBaths: 2, countPools: 1, countGarages: 1, countFloors: 0, backyard: false, frontyard: false, privatePool: true, squareMetersTotal: 800, squareMetersUsable: 500, createdAt: new Date, updatedAt: new Date },
      { id: 7, countRooms: 4, countBaths: 2, countPools: 0, countGarages: 0, countFloors: 1, backyard: true, frontyard: false, privatePool: false, squareMetersTotal: 1000, squareMetersUsable: 750, createdAt: new Date, updatedAt: new Date },
      { id: 8, countRooms: 7, countBaths: 3, countPools: 1, countGarages: 1, countFloors: 2, backyard: true, frontyard: false, privatePool: true, squareMetersTotal: 2500, squareMetersUsable: 1800, createdAt: new Date, updatedAt: new Date },
      { id: 9, countRooms: 4, countBaths: 2, countPools: 0, countGarages: 1, countFloors: 1, backyard: false, frontyard: true, privatePool: false, squareMetersTotal: 1000, squareMetersUsable: 750, createdAt: new Date, updatedAt: new Date },
      { id: 10, countRooms: 2, countBaths: 1, countPools: 0, countGarages: 0, countFloors: 1, backyard: false, frontyard: false, privatePool: false, squareMetersTotal: 1000, squareMetersUsable: 750, createdAt: new Date, updatedAt: new Date },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PropertyFeatures', null, {});
  }
};
