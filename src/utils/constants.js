export const PLANT_VARIETIES = {
  LETTUCE: {
    name: 'Lettuce',
    varieties: ['Butterhead', 'Romaine', 'Iceberg', 'Arugula'],
    growthTime: 25, // days
    optimalTemp: [18, 24], // celsius
    optimalHumidity: [60, 80], // percentage
    lightHours: 14
  },
  TOMATO: {
    name: 'Tomato',
    varieties: ['Cherry', 'Roma', 'Beefsteak', 'Heirloom'],
    growthTime: 65,
    optimalTemp: [20, 26],
    optimalHumidity: [65, 85],
    lightHours: 16
  },
  HERBS: {
    name: 'Herbs',
    varieties: ['Basil', 'Cilantro', 'Parsley', 'Mint'],
    growthTime: 30,
    optimalTemp: [18, 25],
    optimalHumidity: [55, 75],
    lightHours: 12
  },
  LEAFY_GREENS: {
    name: 'Leafy Greens',
    varieties: ['Spinach', 'Kale', 'Swiss Chard', 'Bok Choy'],
    growthTime: 28,
    optimalTemp: [15, 22],
    optimalHumidity: [65, 80],
    lightHours: 13
  }
};

export const SENSOR_THRESHOLDS = {
  HUMIDITY: {
    min: 50,
    max: 90,
    optimal: [60, 80]
  },
  TEMPERATURE: {
    min: 15,
    max: 30,
    optimal: [18, 25]
  },
  PH: {
    min: 5.5,
    max: 6.5,
    optimal: [6.0, 6.3]
  },
  NUTRIENTS: {
    min: 800, // PPM
    max: 1500,
    optimal: [1000, 1200]
  }
};

export const ALERT_TYPES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
};

export const GARDEN_TYPES = {
  NFT: 'Nutrient Film Technique',
  DWC: 'Deep Water Culture',
  EBB_FLOW: 'Ebb and Flow',
  DRIP: 'Drip System',
  AEROPONICS: 'Aeroponics'
};