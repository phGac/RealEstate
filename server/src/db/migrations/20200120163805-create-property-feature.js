'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PropertyFeatures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countRooms: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      countBaths: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      countPools: {
        type: Sequelize.INTEGER
      },
      countGarages: {
        type: Sequelize.INTEGER
      },
      countFloors: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      yearBuild: {
        type: Sequelize.DATE
      },
      backyard: {
        type: Sequelize.BOOLEAN
      },
      frontyard: {
        type: Sequelize.BOOLEAN
      },
      privatePool: {
        type: Sequelize.BOOLEAN
      },
      squareMetersTotal: {
        type: Sequelize.INTEGER
      },
      squareMetersUsable: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PropertyFeatures');
  }
};