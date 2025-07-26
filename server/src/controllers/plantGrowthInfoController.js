const PlantGrowthInfoServices = require('../../services/plantGrowthInfoServices');
const { StatusCodes } = require('http-status-codes');
class PlantGrowthInfoController {
  static async getUniquePlantNames(req, res) {
    try {
      const plantNames = await PlantGrowthInfoServices.getUniquePlantNames();
      return res.status(StatusCodes.OK).json({ data: plantNames });
    } catch (error) {
      console.error('Error fetching plant names:', error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
  }
}

module.exports = PlantGrowthInfoController;
