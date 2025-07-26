const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PlantGrowthInfo = sequelize.define('plantGrowthInfo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
  },
  plantName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idealPH: DataTypes.FLOAT,
  minPH: DataTypes.FLOAT,
  maxPH: DataTypes.FLOAT,
  idealTDS: DataTypes.FLOAT,
  minTDS: DataTypes.FLOAT,
  maxTDS: DataTypes.FLOAT,
  idealHumid: DataTypes.FLOAT,
  minHumid: DataTypes.FLOAT,
  maxHumid: DataTypes.FLOAT,
  idealTemp: DataTypes.FLOAT,
  minTemp: DataTypes.FLOAT,
  maxTemp: DataTypes.FLOAT,
  idealLight: DataTypes.FLOAT,
  minLight: DataTypes.FLOAT,
  maxLight: DataTypes.FLOAT,
  idealHarvestTime: DataTypes.INTEGER,
  minHarvestTime: DataTypes.INTEGER,
  maxHarvestTime: DataTypes.INTEGER,
}, {
  tableName: 'plantGrowthInfo',
  freezeTableName: true,
});

module.exports = PlantGrowthInfo;
