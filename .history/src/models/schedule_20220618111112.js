'use strict';
const { BOOLEAN } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedule.init({
    currentNumber: DataTypes.STRING,
    maxNumber: DataTypes.STRING,
    date: DataTypes.STRING,
    timeType: DataTypes.STRING,
    doctorId: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};