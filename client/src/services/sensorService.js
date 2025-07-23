import ApiService from './api';

class SensorService {
  // Get current sensor readings
  async getCurrentReadings() {
    try {
      // For now, return mock data. Replace with actual API call
      return {
        humidity: Math.round(65 + Math.random() * 10),
        temperature: Math.round((20 + Math.random() * 8) * 10) / 10,
        ph: Math.round((6 + Math.random() * 2) * 10) / 10,
        nutrients: Math.round(80 + Math.random() * 20),
        lightLevel: Math.round(70 + Math.random() * 30),
        waterLevel: Math.round(75 + Math.random() * 25),
        timestamp: new Date().toISOString()
      };
      
      // Uncomment when API is ready:
      // return await ApiService.get('/sensors/current');
    } catch (error) {
      console.error('Error fetching sensor data:', error);
      throw error;
    }
  }

  // Get historical sensor data
  async getHistoricalData(startDate, endDate, sensorType = 'all') {
    try {
      const params = {
        start: startDate,
        end: endDate,
        type: sensorType
      };
      
      // Mock historical data
      const mockData = [];
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      for (let d = new Date(start); d <= end; d.setHours(d.getHours() + 1)) {
        mockData.push({
          timestamp: new Date(d).toISOString(),
          humidity: Math.round(65 + Math.random() * 10),
          temperature: Math.round((20 + Math.random() * 8) * 10) / 10,
          ph: Math.round((6 + Math.random() * 2) * 10) / 10,
          nutrients: Math.round(80 + Math.random() * 20)
        });
      }
      
      return mockData;
      
      // Uncomment when API is ready:
      // return await ApiService.get('/sensors/history', params);
    } catch (error) {
      console.error('Error fetching historical sensor data:', error);
      throw error;
    }
  }

  // Subscribe to real-time sensor updates
  subscribeToUpdates(callback) {
    // Mock WebSocket connection
    const interval = setInterval(() => {
      this.getCurrentReadings().then(callback);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);

    // Uncomment when WebSocket is ready:
    // const ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    // ws.onmessage = (event) => {
    //   const data = JSON.parse(event.data);
    //   callback(data);
    // };
    // return () => ws.close();
  }
}

export default new SensorService();