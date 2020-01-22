'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn( 'Users', 'rut', {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true,
        unique: true,
        defaultValue: -1
      }),
      queryInterface.addColumn( 'Users', 'rutDv', {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1],
        defaultValue: ''
      }),
      queryInterface.addColumn( 'Users', 'status', {
        type: Sequelize.INTEGER,
        allowNull: false,
        len: [1],
        defaultValue: 0
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'rut'),
      queryInterface.removeColumn('Users', 'rutDv'),
      queryInterface.removeColumn('Users', 'status'),
    ]);
  }
};
