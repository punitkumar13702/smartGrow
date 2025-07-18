export const validateSensorReading = (type, value) => {
  const thresholds = SENSOR_THRESHOLDS[type.toUpperCase()];
  if (!thresholds) return false;
  
  return value >= thresholds.min && value <= thresholds.max;
};

export const validatePlantData = (plantData) => {
  const errors = {};
  
  if (!plantData.name || plantData.name.trim().length === 0) {
    errors.name = 'Plant name is required';
  }
  
  if (!plantData.variety || plantData.variety.trim().length === 0) {
    errors.variety = 'Plant variety is required';
  }
  
  if (!plantData.gardenId) {
    errors.gardenId = 'Garden selection is required';
  }
  
  if (plantData.plantedDate && isAfter(new Date(plantData.plantedDate), new Date())) {
    errors.plantedDate = 'Planted date cannot be in the future';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};