'use strict';

const bcrypt = require('bcryptjs');

const hashing = async password => {
  let password_hash;
  await bcrypt.hash(password, 10).then(hash => {
    password_hash = hash;
  });
  return password_hash;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password_hash = await hashing('password'); // => default password_hash (encrypted password)

    return queryInterface.bulkInsert('Users', [// general administrador
    {
      id: 1,
      firstName: 'admin',
      roleId: 1,
      lastName: 'admin',
      email: 'admin@email.com',
      password_hash,
      rut: 123456,
      rutDv: '7',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, // user administratoe
    {
      id: 2,
      firstName: 'abby',
      roleId: 2,
      lastName: 'ortiz',
      email: 'abby.o.123@email.com',
      password_hash,
      rut: 234567,
      rutDv: '8',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, // broker
    {
      id: 3,
      firstName: 'layton',
      roleId: 3,
      lastName: 'gardner',
      email: 'layton.g.234@email.com',
      password_hash,
      rut: 345678,
      rutDv: '9',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, // 
    {
      id: 4,
      firstName: 'lucia',
      roleId: 4,
      lastName: 'sutton',
      email: 'lucia.s@email.com',
      password_hash,
      rut: 456789,
      rutDv: '0',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, // 
    {
      id: 5,
      firstName: 'harry',
      roleId: 2,
      lastName: 'simmons',
      email: 'harry.simmons@email.com',
      password_hash,
      rut: 567890,
      rutDv: '1',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, // Propietarios de bienes raices
    {
      id: 6,
      firstName: 'keira',
      roleId: 2,
      lastName: 'mullins',
      email: 'keira.mullins@email.com',
      password_hash,
      rut: 678901,
      rutDv: '2',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      firstName: 'josie',
      roleId: 2,
      lastName: 'graham',
      email: 'josie.graham@email.com',
      password_hash,
      rut: 789012,
      rutDv: '3',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      firstName: 'ashley',
      roleId: 2,
      lastName: 'drew',
      email: 'ashley.drew@email.com',
      password_hash,
      rut: 890123,
      rutDv: '4',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      firstName: 'travis',
      roleId: 2,
      lastName: 'mccoy',
      email: 'travis.mccoy@email.com',
      password_hash,
      rut: 901234,
      rutDv: '5',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};