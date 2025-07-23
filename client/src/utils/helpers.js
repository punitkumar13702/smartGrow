import { format, formatDistanceToNow, isAfter, isBefore, addDays } from 'date-fns';

export const formatDate = (date, formatString = 'PPP') => {
  return format(new Date(date), formatString);
};

export const formatTimeAgo = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const calculateGrowthProgress = (plantedDate, expectedHarvest) => {
  const planted = new Date(plantedDate);
  const harvest = new Date(expectedHarvest);
  const now = new Date();
  
  const totalTime = harvest.getTime() - planted.getTime();
  const elapsedTime = now.getTime() - planted.getTime();
  
  return Math.min(Math.max((elapsedTime / totalTime) * 100, 0), 100);
};

export const getPlantHealth = (sensorData, plantType) => {
  const { HUMIDITY, TEMPERATURE } = SENSOR_THRESHOLDS;
  const plant = PLANT_VARIETIES[plantType];
  
  if (!plant || !sensorData) return 'unknown';
  
  const { humidity, temperature } = sensorData;
  const [minTemp, maxTemp] = plant.optimalTemp;
  const [minHum, maxHum] = plant.optimalHumidity;
  
  const tempInRange = temperature >= minTemp && temperature <= maxTemp;
  const humInRange = humidity >= minHum && humidity <= maxHum;
  
  if (tempInRange && humInRange) return 'excellent';
  if ((temperature >= minTemp - 2 && temperature <= maxTemp + 2) && 
      (humidity >= minHum - 5 && humidity <= maxHum + 5)) return 'good';
  if ((temperature >= minTemp - 5 && temperature <= maxTemp + 5) && 
      (humidity >= minHum - 10 && humidity <= maxHum + 10)) return 'warning';
  
  return 'critical';
};

export const generatePlantId = () => {
  return `plant_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const calculateExpectedHarvest = (plantedDate, plantType) => {
  const plant = PLANT_VARIETIES[plantType];
  if (!plant) return null;
  
  return addDays(new Date(plantedDate), plant.growthTime);
};

export const isReadyForHarvest = (plantedDate, plantType) => {
  const expectedHarvest = calculateExpectedHarvest(plantedDate, plantType);
  return expectedHarvest ? isAfter(new Date(), expectedHarvest) : false;
};

export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount);
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
