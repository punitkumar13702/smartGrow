import { useState, useEffect } from 'react';
import SensorService from '../services/sensorService';

export const useSensorData = (autoUpdate = true) => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSensorData = async () => {
    try {
      setLoading(true);
      const data = await SensorService.getCurrentReadings();
      setSensorData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData();

    if (autoUpdate) {
      const unsubscribe = SensorService.subscribeToUpdates((data) => {
        setSensorData(data);
      });

      return unsubscribe;
    }
  }, [autoUpdate]);

  return {
    sensorData,
    loading,
    error,
    refetch: fetchSensorData
  };
};