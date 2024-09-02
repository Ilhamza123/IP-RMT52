'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teknik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mendefinisikan asosiasi
      Teknik.belongsTo(models.Basic, {
        foreignKey: 'BasicId',
      });
    }
  }
  Teknik.init({
    cardTitle: DataTypes.STRING,
    cardText: DataTypes.STRING,
    BasicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Teknik',
  });
  return Teknik;
};