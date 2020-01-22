'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    rut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      trim: true,
      unique: true,
    },
    rutDv: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    }
  }, { });

  User.associate = function(models) {
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
      as: 'role'
    });
    User.hasMany(models.Property, {
      foreignKey: 'idOwner',
      as: 'properties'
    });
    User.hasMany(models.Post, {
      foreignKey: 'idBroker',
      as: 'posts'
    });
  };
  User.beforeCreate(async (user, options) => {
    if(user.password){  
      await bcrypt.hash(user.password, 10).then(hash => {
        user.password_hash = hash;
      });
    }
  });

  User.prototype.isValidPassword = async function(password) {
    let result;
    await bcrypt.compare(password, this.password_hash, (err, success) => {
      if(err) 
        result = false;
      else
        result = success;
    });

    return result;
  };

  return User;
};