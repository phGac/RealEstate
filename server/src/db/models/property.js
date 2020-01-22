'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    idFeature: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    idOwner: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dateOnMarket: DataTypes.DATE,
    dateOutMarket: DataTypes.DATE,
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    for: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'sell'
    },
  }, {});
  Property.associate = function(models) {
    Property.belongsTo(models.User, {
      foreignKey: 'idOwner',
      as: 'owner'
    });
    Property.belongsTo(models.PropertyFeature, {
      foreignKey: 'idFeature',
      as: 'feature'
    });
  };
  return Property;
};