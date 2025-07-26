// src/routes/plantGrowthInfoRoutes.js
const express = require('express');
const router = express.Router();
const PlantGrowthInfoController = require('../controllers/plantGrowthInfoController');
const {authenticateJWT } = require('../middleware/authMiddleware');

router.get('/uniquePlantNames', authenticateJWT ,PlantGrowthInfoController.getUniquePlantNames);

module.exports = router;
