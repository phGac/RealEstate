'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn('UserRoles', 'create', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }), queryInterface.addColumn('UserRoles', 'modify', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }), queryInterface.addColumn('UserRoles', 'delete', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }), queryInterface.addColumn('UserRoles', 'self', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }), queryInterface.addColumn('UserRoles', 'all', {
      type: Sequelize.BOOLEAN,
      allowNull: false
    })]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('UserRoles', 'create'), queryInterface.removeColumn('UserRoles', 'modify'), queryInterface.removeColumn('UserRoles', 'delete'), queryInterface.removeColumn('UserRoles', 'self'), queryInterface.removeColumn('UserRoles', 'all')]);
  }
};