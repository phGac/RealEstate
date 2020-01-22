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
      firstName: 'Admin',
      roleId: 1,
      lastName: 'Admin',
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
      firstName: 'Abby',
      roleId: 2,
      lastName: 'Ortiz',
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
      firstName: 'Layton',
      roleId: 3,
      lastName: 'Gardner',
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
      firstName: 'Lucia',
      roleId: 4,
      lastName: 'Sutton',
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
      firstName: 'Harry',
      roleId: 2,
      lastName: 'Simmons',
      email: 'harry.simmons@email.com',
      password_hash,
      rut: 567890,
      rutDv: '1',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};