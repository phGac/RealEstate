'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('Users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    }), queryInterface.changeColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    }), queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('Users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: true
    }), queryInterface.changeColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: true
    }), queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false
    })]);
  }
};