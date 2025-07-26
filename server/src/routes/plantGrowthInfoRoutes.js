const express = require('express');
const router = express.Router();
const PlantGrowthInfoController = require('../controllers/plantGrowthInfoController');
const {authenticateJWT } = require('../middleware/authMiddleware');

router.get('/uniquePlantNames', authenticateJWT ,PlantGrowthInfoController.getUniquePlantNames);
router.post('/createPlant', authenticateJWT, PlantGrowthInfoController.createPlant);
router.get('/getAllPlants', authenticateJWT, PlantGrowthInfoController.getAllPlants);
router.get('/getPlantByUuid/:uuid', authenticateJWT, PlantGrowthInfoController.getPlantByUuid);
router.put('/updatePlantDetails/:uuid', authenticateJWT, PlantGrowthInfoController.updatePlant);
router.delete('/deletePlant/:uuid', authenticateJWT, PlantGrowthInfoController.deletePlant);

module.exports = router;
