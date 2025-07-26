const PlantGrowthInfo = require('../src/models/plantGrowthInfoModel');
const Vendor = require("../src/models/vendorDetailsModel");
const { Sequelize } = require('sequelize');

class PlantGrowthInfoServices {
  static async getUniquePlantNames() {
    const result = await PlantGrowthInfo.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('plantName')), 'plantName']
      ],
      raw: true
    });

    return result.map(item => item.plantName);
  }
}

module.exports = PlantGrowthInfoServices;
