'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});

  Role.associate = function (models) {
    Role.hasMany(models.User, {
      as: 'users'
    });
  };

  return Role;
};