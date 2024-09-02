'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Belt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mendefinisikan asosiasi one-to-many dengan model Basic
      Belt.hasMany(models.Basic, {
        foreignKey: 'BeltId'
      });
    }
  }
  Belt.init({
    title: DataTypes.STRING,
    arti: DataTypes.STRING,
    teknik: DataTypes.STRING,
    descripsi: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Belt',
  });
  return Belt;
};