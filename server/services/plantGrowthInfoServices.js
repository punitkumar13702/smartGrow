const PlantGrowthInfo = require('../src/models/plantGrowthInfoModel');
const { Sequelize } = require('sequelize');

class PlantGrowthInfoServices {
  static async getUniquePlantNames() {
    const result = await PlantGrowthInfo.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('plantName')), 'plantName'],
        'uuid'
      ],
      raw: true
    });
    return result;
  }

  static async createPlant(data) {
    const {
      plantName,
      idealPH, minPH, maxPH,
      idealTDS, minTDS, maxTDS,
      idealHumid, minHumid, maxHumid,
      idealTemp, minTemp, maxTemp,
      idealLight, minLight, maxLight,
      idealHarvestTime, minHarvestTime, maxHarvestTime,
    } = data;

    const existingPlant = await PlantGrowthInfo.findOne({
        where: { plantName }
    });

    if (existingPlant) {
        throw new Error("Plant with this name already exists");
    }

    return await PlantGrowthInfo.create({
      plantName,
      idealPH, minPH, maxPH,
      idealTDS, minTDS, maxTDS,
      idealHumid, minHumid, maxHumid,
      idealTemp, minTemp, maxTemp,
      idealLight, minLight, maxLight,
      idealHarvestTime, minHarvestTime, maxHarvestTime,
    });
  }

  static async getAllPlants() {
    return await PlantGrowthInfo.findAll({ order: [['plantName', 'ASC']] });
  }

  static async getPlantByUuid(uuid) {
    return await PlantGrowthInfo.findOne({ where: { uuid } });
  }

  static async updatePlant(uuid, data) {
    await PlantGrowthInfo.update(data, { where: { uuid } });
    return await PlantGrowthInfo.findOne({ where: { uuid } });
  }

  static async deletePlant(uuid) {
    return await PlantGrowthInfo.destroy({ where: { uuid } });
  }
}

module.exports = PlantGrowthInfoServices;
