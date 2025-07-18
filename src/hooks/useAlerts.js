import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const useAlerts = () => {
  const { alerts, addAlert, removeAlert, sensorData } = useApp();
  const [alertHistory, setAlertHistory] = useState([]);

  // Monitor sensor data for automatic alerts
  useEffect(() => {
    if (!sensorData) return;

    const { humidity, temperature } = sensorData;

    // Check for critical conditions
    if (humidity < 40) {
      addAlert({
        type: 'critical',
        title: 'Critical: Low Humidity',
        description: `Humidity at ${humidity}% - Plants may suffer`,
        color: 'bg-red-500'
      });
    }

    if (temperature > 30) {
      addAlert({
        type: 'warning',
        title: 'High Temperature Alert',
        description: `Temperature at ${temperature}°C - Check cooling system`,
        color: 'bg-orange-500'
      });
    }

    if (humidity > 90) {
      addAlert({
        type: 'warning',
        title: 'High Humidity Alert',
        description: `Humidity at ${humidity}% - Risk of fungal growth`,
        color: 'bg-yellow-500'
      });
    }
  }, [sensorData, addAlert]);

  const dismissAlert = (alertId) => {
    const alert = alerts.find(a => a.id === alertId);
    if (alert) {
      setAlertHistory(prev => [...prev, { ...alert, dismissedAt: new Date().toISOString() }]);
      removeAlert(alertId);
    }
  };

  const getActiveAlertsByType = (type) => {
    return alerts.filter(alert => alert.type === type);
  };

  const getAlertCount = () => {
    return {
      total: alerts.length,
      critical: alerts.filter(a => a.severity === 'high' || a.type === 'critical').length,
      warning: alerts.filter(a => a.severity === 'medium' || a.type === 'warning').length,
      info: alerts.filter(a => a.severity === 'low' || a.type === 'info').length
    };
  };

  return {
    alerts,
    alertHistory,
    addAlert,
    removeAlert,
    dismissAlert,
    getActiveAlertsByType,
    getAlertCount
  };
};

// src/utils/validation.js
export const validateSensorReading = (type, value) => {
  const thresholds = {
    HUMIDITY: { min: 0, max: 100 },
    TEMPERATURE: { min: -50, max: 80 },
    PH: { min: 0, max: 14 },
    NUTRIENTS: { min: 0, max: 3000 }
  };

  const threshold = thresholds[type.toUpperCase()];
  if (!threshold) return false;
  
  return value >= threshold.min && value <= threshold.max;
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
  
  if (plantData.plantedDate && new Date(plantData.plantedDate) > new Date()) {
    errors.plantedDate = 'Planted date cannot be in the future';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateGardenData = (gardenData) => {
  const errors = {};
  
  if (!gardenData.name || gardenData.name.trim().length === 0) {
    errors.name = 'Garden name is required';
  }
  
  if (!gardenData.type || gardenData.type.trim().length === 0) {
    errors.type = 'Garden type is required';
  }
  
  if (gardenData.plantCount && gardenData.plantCount < 0) {
    errors.plantCount = 'Plant count cannot be negative';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateUserSettings = (settings) => {
  const errors = {};
  
  if (typeof settings.autoDispense !== 'boolean') {
    errors.autoDispense = 'Auto-dispense must be true or false';
  }
  
  if (typeof settings.notifications !== 'boolean') {
    errors.notifications = 'Notifications must be true or false';
  }
  
  if (typeof settings.aiMode !== 'boolean') {
    errors.aiMode = 'AI mode must be true or false';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};