'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserRoles', [// admin
    {
      id: 1,
      userId: 1,
      roleId: 1
    }, // self[m] y usuarios[c,m,d]
    {
      id: 2,
      userId: 2,
      roleId: 8
    }, {
      id: 2,
      userId: 2,
      roleId: 5
    }, {
      id: 2,
      userId: 2,
      roleId: 6
    }, {
      id: 2,
      userId: 2,
      roleId: 7
    }, // self[m] y broker
    {
      id: 3,
      userId: 2,
      roleId: 8
    }, {
      id: 3,
      userId: 2,
      roleId: 4
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRoles', null, {});
  }
};