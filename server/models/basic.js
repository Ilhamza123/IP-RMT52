'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Definisikan asosiasi di sini
      Basic.belongsTo(models.User, { foreignKey: 'UserId' });
      Basic.belongsTo(models.Belt, { foreignKey: 'BeltId' });
    }
  }
  Basic.init({
    cardTitle: DataTypes.STRING,
    cardText: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    BeltId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basic',
  });
  return Basic;
};