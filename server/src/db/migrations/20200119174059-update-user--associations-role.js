'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      //queryInterface.removeConstraint('Users', 'Users_roleId_foreign_idx'),
      queryInterface.addColumn('Users', 'roleId', {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Roles',
          key: 'id'
        }
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'roleId')
    ]);
  }
};
