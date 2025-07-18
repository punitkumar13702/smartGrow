import { useState, useEffect } from 'react';
import GardenService from '../services/gardenService';

export const useGardenData = () => {
  const [gardens, setGardens] = useState([]);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGardens = async () => {
    try {
      setLoading(true);
      const gardenData = await GardenService.getGardens();
      setGardens(gardenData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPlants = async (gardenId = null) => {
    try {
      const plantData = await GardenService.getPlants(gardenId);
      setPlants(plantData);
    } catch (err) {
      setError(err.message);
    }
  };

  const addPlant = async (gardenId, plantData) => {
    try {
      const newPlant = await GardenService.addPlant(gardenId, plantData);
      setPlants(prev => [...prev, newPlant]);
      return newPlant;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updatePlant = async (plantId, updates) => {
    try {
      const updatedPlant = await GardenService.updatePlant(plantId, updates);
      setPlants(prev => prev.map(plant => 
        plant.id === plantId ? { ...plant, ...updatedPlant } : plant
      ));
      return updatedPlant;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deletePlant = async (plantId) => {
    try {
      await GardenService.deletePlant(plantId);
      setPlants(prev => prev.filter(plant => plant.id !== plantId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchGardens();
    fetchPlants();
  }, []);

  return {
    gardens,
    plants,
    loading,
    error,
    fetchGardens,
    fetchPlants,
    addPlant,
    updatePlant,
    deletePlant
  };
};