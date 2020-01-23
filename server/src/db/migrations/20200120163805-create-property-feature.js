'use strict';

const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PropertyFeatures', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: () => uuid()
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