import ApiService from './api';

class GardenService {
  // Get all gardens
  async getGardens() {
    try {
      // Mock data for now
      return [
        {
          id: 1,
          name: 'Main Hydroponic Garden',
          type: 'NFT System',
          status: 'active',
          plantCount: 25,
          lastWatered: '2025-07-17T08:00:00Z',
          nextHarvest: '2025-08-15T00:00:00Z'
        },
        {
          id: 2,
          name: 'Herb Garden',
          type: 'Deep Water Culture',
          status: 'active',
          plantCount: 30,
          lastWatered: '2025-07-17T09:30:00Z',
          nextHarvest: '2025-08-10T00:00:00Z'
        },
        {
          id: 3,
          name: 'Experimental Plot',
          type: 'Ebb and Flow',
          status: 'maintenance',
          plantCount: 20,
          lastWatered: '2025-07-16T16:00:00Z',
          nextHarvest: '2025-08-25T00:00:00Z'
        }
      ];
      
      // Uncomment when API is ready:
      // return await ApiService.get('/gardens');
    } catch (error) {
      console.error('Error fetching gardens:', error);
      throw error;
    }
  }

  // Get plants in a specific garden
  async getPlants(gardenId) {
    try {
      // Mock plant data
      const allPlants = [
        {
          id: 1,
          name: 'Lettuce #1',
          variety: 'Butterhead',
          health: 'excellent',
          age: 21,
          waterLevel: 85,
          lightHours: 14,
          growthProgress: 75,
          expectedHarvest: '2025-08-15',
          gardenId: 1,
          plantedDate: '2025-06-27',
          notes: 'Growing well, good color'
        },
        {
          id: 2,
          name: 'Tomato #1',
          variety: 'Cherry Tomato',
          health: 'good',
          age: 45,
          waterLevel: 92,
          lightHours: 16,
          growthProgress: 60,
          expectedHarvest: '2025-09-01',
          gardenId: 1,
          plantedDate: '2025-06-03',
          notes: 'Flowering stage'
        }
        // ... more plants
      ];
      
      return gardenId ? allPlants.filter(plant => plant.gardenId === gardenId) : allPlants;
      
      // Uncomment when API is ready:
      // return await ApiService.get(`/gardens/${gardenId}/plants`);
    } catch (error) {
      console.error('Error fetching plants:', error);
      throw error;
    }
  }

  // Add new plant
  async addPlant(gardenId, plantData) {
    try {
      const newPlant = {
        id: Date.now(), // Mock ID generation
        ...plantData,
        gardenId,
        plantedDate: new Date().toISOString(),
        age: 0,
        growthProgress: 0,
        health: 'good'
      };
      
      return newPlant;
      
      // Uncomment when API is ready:
      // return await ApiService.post(`/gardens/${gardenId}/plants`, plantData);
    } catch (error) {
      console.error('Error adding plant:', error);
      throw error;
    }
  }

  // Update plant data
  async updatePlant(plantId, updates) {
    try {
      // Mock update
      return {
        id: plantId,
        ...updates,
        lastUpdated: new Date().toISOString()
      };
      
      // Uncomment when API is ready:
      // return await ApiService.put(`/plants/${plantId}`, updates);
    } catch (error) {
      console.error('Error updating plant:', error);
      throw error;
    }
  }

  // Delete plant
  async deletePlant(plantId) {
    try {
      // Mock deletion
      return { success: true, plantId };
      
      // Uncomment when API is ready:
      // return await ApiService.delete(`/plants/${plantId}`);
    } catch (error) {
      console.error('Error deleting plant:', error);
      throw error;
    }
  }

  // Get garden analytics
  async getGardenAnalytics(gardenId, timeRange = '7d') {
    try {
      // Mock analytics data
      return {
        totalYield: 45.2, // kg
        averageGrowthTime: 28, // days
        successRate: 92, // percentage
        waterUsage: 125, // liters
        energyConsumption: 85, // kWh
        timeRange,
        harvestHistory: [
          { date: '2025-07-10', yield: 2.5, variety: 'Lettuce' },
          { date: '2025-07-08', yield: 1.8, variety: 'Spinach' },
          { date: '2025-07-05', yield: 3.2, variety: 'Kale' }
        ]
      };
      
      // Uncomment when API is ready:
      // return await ApiService.get(`/gardens/${gardenId}/analytics`, { timeRange });
    } catch (error) {
      console.error('Error fetching garden analytics:', error);
      throw error;
    }
  }
}

export default new GardenService();