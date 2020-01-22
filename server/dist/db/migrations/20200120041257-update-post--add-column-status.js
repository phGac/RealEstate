'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'status', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'status');
  }
};