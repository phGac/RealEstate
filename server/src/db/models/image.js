'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    idPost: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id'
      }
    },
    path: DataTypes.STRING,
    position: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Post, {
      foraignkey: 'idPost',
      as: 'post'
    });
  };
  return Image;
};