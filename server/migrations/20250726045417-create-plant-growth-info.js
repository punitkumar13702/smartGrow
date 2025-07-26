'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plantGrowthInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      plantName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idealPH: Sequelize.FLOAT,
      minPH: Sequelize.FLOAT,
      maxPH: Sequelize.FLOAT,
      idealTDS: Sequelize.FLOAT,
      minTDS: Sequelize.FLOAT,
      maxTDS: Sequelize.FLOAT,
      idealHumid: Sequelize.FLOAT,
      minHumid: Sequelize.FLOAT,
      maxHumid: Sequelize.FLOAT,
      idealTemp: Sequelize.FLOAT,
      minTemp: Sequelize.FLOAT,
      maxTemp: Sequelize.FLOAT,
      idealLight: Sequelize.FLOAT,
      minLight: Sequelize.FLOAT,
      maxLight: Sequelize.FLOAT,
      idealHarvestTime: Sequelize.INTEGER,
      minHarvestTime: Sequelize.INTEGER,
      maxHarvestTime: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },

  down: async (queryInterface) => {
    //await queryInterface.dropTable('plantGrowthInfo');
  }
};
