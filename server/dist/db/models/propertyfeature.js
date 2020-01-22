'use strict';

module.exports = (sequelize, DataTypes) => {
  const PropertyFeature = sequelize.define('PropertyFeature', {
    countRooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    countBaths: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    countPools: DataTypes.INTEGER,
    countGarages: DataTypes.INTEGER,
    countFloors: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yearBuild: DataTypes.DATE,
    backyard: DataTypes.BOOLEAN,
    frontyard: DataTypes.BOOLEAN,
    privatePool: DataTypes.BOOLEAN,
    squareMetersTotal: DataTypes.INTEGER,
    squareMetersUsable: DataTypes.INTEGER
  }, {});

  PropertyFeature.associate = function (models) {
    PropertyFeature.hasOne(models.Property, {
      foreignKey: 'id',
      as: 'property'
    });
  };

  return PropertyFeature;
};