"use strict";

const { v4: uuidv4 } = require("uuid");

const plantNames = [
  "Lettuce", "Coriander", "Chilli", "Pudina", "Spinach", "Basil", "Oregano",
  "Parsley", "Tomato", "Cucumber", "Bell Pepper", "Strawberry", "Kale",
  "Fenugreek", "Arugula", "Sage", "Thyme", "Rosemary", "Spring Onion",
  "Chives", "Celery", "Bok Choy", "Zucchini", "Watercress", "Broccoli",
  "Cauliflower", "Beetroot", "Radish", "Swiss Chard", "Pak Choi", "Dill",
  "Mustard Greens", "Turnip", "Sweet Basil", "Perilla", "Fennel", "Lavender",
  "Lemon Balm", "Chamomile", "Tarragon", "Endive", "Escarole", "Leek",
  "Marjoram", "Nasturtium", "Cilantro", "Sorrel", "Yarrow", "Mint", "Amaranth"
];

function getRange(base, spread = 0.5) {
  const ideal = +(base + (Math.random() * spread - spread / 2)).toFixed(2);
  const min = +(ideal - Math.random() * 0.3).toFixed(2);
  const max = +(ideal + Math.random() * 0.3).toFixed(2);
  return { min, max, ideal };
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const records = plantNames.slice(0, 50).map((plantName, index) => {
      const { min: minPH, max: maxPH, ideal: idealPH } = getRange(6.0);
      const { min: minTDS, max: maxTDS, ideal: idealTDS } = getRange(1000, 200);
      const { min: minHumid, max: maxHumid, ideal: idealHumid } = getRange(60, 20);
      const { min: minTemp, max: maxTemp, ideal: idealTemp } = getRange(22, 5);
      const { min: minLight, max: maxLight, ideal: idealLight } = getRange(20000, 10000);
      const { min: minHarvestTime, max: maxHarvestTime, ideal: idealHarvestTime } = getRange(30, 20);

      return {
        id: index + 1,
        uuid: uuidv4(),
        plantName,
        idealPH,
        minPH,
        maxPH,
        idealTDS,
        minTDS,
        maxTDS,
        idealHumid,
        minHumid,
        maxHumid,
        idealTemp,
        minTemp,
        maxTemp,
        idealLight,
        minLight,
        maxLight,
        idealHarvestTime,
        minHarvestTime,
        maxHarvestTime,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("plantGrowthInfo", records, {});
  },

  down: async (queryInterface, Sequelize) => {
    //await queryInterface.bulkDelete("plantGrowthInfos", null, {});
  }
};
