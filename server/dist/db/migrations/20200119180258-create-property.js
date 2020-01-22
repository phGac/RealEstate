'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFeature: {
        type: Sequelize.INTEGER
      },
      idOwner: {
        type: Sequelize.INTEGER,
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