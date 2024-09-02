'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Athlete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Athlete.init({
    athlete_Rank: DataTypes.INTEGER,
    athlete_name: DataTypes.STRING,
    athlete_GAL: DataTypes.STRING,
    athlete_Country: DataTypes.STRING,
    athlete_Points: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Athlete',
  });
  return Athlete;
};