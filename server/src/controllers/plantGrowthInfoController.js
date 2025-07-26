const PlantGrowthInfoServices = require('../../services/plantGrowthInfoServices');
const { StatusCodes } = require('http-status-codes');

class PlantGrowthInfoController {
static async getUniquePlantNames(req, res) {
  try {
    const plantNames = await PlantGrowthInfoServices.getUniquePlantNames();

    if (!plantNames || plantNames.length === 0)
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'No plant names found' });

    return res.status(StatusCodes.OK).json({ data: plantNames });
  } catch (error) {
    console.error('Error fetching plant names:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
  }
}  

    static async createPlant(req, res) {
    try {
    if (req.user.roleId !== 0)
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });

    const newPlant = await PlantGrowthInfoServices.createPlant(req.body);
    return res.status(StatusCodes.CREATED).json({ data: newPlant });

    } catch (error) {
    console.error('Error creating plant:', error);

    if (error.message === "Plant with this name already exists") {
      return res.status(StatusCodes.CONFLICT).json({ message: error.message });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
    }

static async getAllPlants(req, res) {
  try {
    if (req.user.roleId !== 0)
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });

    const plants = await PlantGrowthInfoServices.getAllPlants();

    if (!plants || plants.length === 0)
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'No plants found' });

    return res.status(StatusCodes.OK).json({ data: plants });
  } catch (error) {
    console.error('Error fetching plants:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
  }
}

static async getPlantByUuid(req, res) {
  try {
    if (req.user.roleId !== 0)
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });

    const { uuid } = req.params;
    const plant = await PlantGrowthInfoServices.getPlantByUuid(uuid);

    if (!plant)
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Plant not found' });

    return res.status(StatusCodes.OK).json({ data: plant });
  } catch (error) {
    console.error('Error fetching plant by uuid:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
  }
}

  static async updatePlant(req, res) {
    try {
      if (req.user.roleId !== 0) return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });

      const { uuid } = req.params;
      const updated = await PlantGrowthInfoServices.updatePlant(uuid, req.body);
      return res.status(StatusCodes.OK).json({ data: updated });
    } catch (error) {
      console.error('Error updating plant:', error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
  }

  static async deletePlant(req, res) {
    try {
      if (req.user.roleId !== 0) return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });

      const { uuid } = req.params;
      await PlantGrowthInfoServices.deletePlant(uuid);
      return res.status(StatusCodes.OK).json({ message: 'Plant deleted successfully' });
    } catch (error) {
      console.error('Error deleting plant:', error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
  }
}

module.exports = PlantGrowthInfoController;
