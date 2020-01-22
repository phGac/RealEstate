'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Properties', 'idFeature', {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: 'PropertyFeatures',
        key: 'id'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Properties', 'idFeature', {
      type: Sequelize.INTEGER
    });
  }
};