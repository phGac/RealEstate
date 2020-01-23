'use strict';

const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: () => uuid()
      },
      idFeature: {
        type: Sequelize.UUID
      },
      idOwner: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      direction: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dateOnMarket: {
        type: Sequelize.DATE
      },
      dateOutMarket: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      for: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'sell'
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
    return queryInterface.dropTable('Properties');
  }
};