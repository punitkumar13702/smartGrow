// src/context/AppContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  user: {
    name: 'Eren',
    avatar: 'E',
    isAuthenticated: true
  },
  sensorData: {
    humidity: 69,
    temperature: 23.4,
    lastUpdated: new Date().toISOString()
  },
  gardenData: {
    gardens: 3,
    plants: 75,
    growth: 87,
    activeGarden: null
  },
  alerts: [
    {
      id: 1,
      type: 'action',
      title: 'Action Needed',
      description: 'Spider mites detected',
      severity: 'high',
      color: 'bg-orange-500',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      type: 'warning',
      title: 'Low nutrient solutions',
      description: 'Check Level',
      severity: 'medium',
      color: 'bg-yellow-500',
      timestamp: new Date().toISOString()
    }
  ],
  performance: {
    roiStatus: 'Tracking',
    cycleDuration: '12 Days Avg',
    efficiency: 87
  },
  settings: {
    autoDispense: false,
    notifications: true,
    aiMode: false
  },
  loading: false,
  error: null
};

// Action types
const actionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  UPDATE_SENSOR_DATA: 'UPDATE_SENSOR_DATA',
  UPDATE_GARDEN_DATA: 'UPDATE_GARDEN_DATA',
  ADD_ALERT: 'ADD_ALERT',
  REMOVE_ALERT: 'REMOVE_ALERT',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  SET_ACTIVE_GARDEN: 'SET_ACTIVE_GARDEN',
  UPDATE_PERFORMANCE: 'UPDATE_PERFORMANCE'
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case actionTypes.UPDATE_SENSOR_DATA:
      return {
        ...state,
        sensorData: {
          ...state.sensorData,
          ...action.payload,
          lastUpdated: new Date().toISOString()
        }
      };

    case actionTypes.UPDATE_GARDEN_DATA:
      return {
        ...state,
        gardenData: {
          ...state.gardenData,
          ...action.payload
        }
      };

    case actionTypes.ADD_ALERT:
      return {
        ...state,
        alerts: [
          {
            ...action.payload,
            id: Date.now(),
            timestamp: new Date().toISOString()
          },
          ...state.alerts
        ]
      };

    case actionTypes.REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload)
      };

    case actionTypes.UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload
        }
      };

    case actionTypes.SET_ACTIVE_GARDEN:
      return {
        ...state,
        gardenData: {
          ...state.gardenData,
          activeGarden: action.payload
        }
      };

    case actionTypes.UPDATE_PERFORMANCE:
      return {
        ...state,
        performance: {
          ...state.performance,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const actions = {
    setLoading: (loading) => {
      dispatch({ type: actionTypes.SET_LOADING, payload: loading });
    },

    setError: (error) => {
      dispatch({ type: actionTypes.SET_ERROR, payload: error });
    },

    updateSensorData: (data) => {
      dispatch({ type: actionTypes.UPDATE_SENSOR_DATA, payload: data });
    },

    updateGardenData: (data) => {
      dispatch({ type: actionTypes.UPDATE_GARDEN_DATA, payload: data });
    },

    addAlert: (alert) => {
      dispatch({ type: actionTypes.ADD_ALERT, payload: alert });
    },

    removeAlert: (alertId) => {
      dispatch({ type: actionTypes.REMOVE_ALERT, payload: alertId });
    },

    updateSettings: (settings) => {
      dispatch({ type: actionTypes.UPDATE_SETTINGS, payload: settings });
    },

    setActiveGarden: (gardenId) => {
      dispatch({ type: actionTypes.SET_ACTIVE_GARDEN, payload: gardenId });
    },

    updatePerformance: (data) => {
      dispatch({ type: actionTypes.UPDATE_PERFORMANCE, payload: data });
    }
  };

  // Simulate real-time sensor data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate slight variations in sensor readings
      const humidity = Math.round((state.sensorData.humidity + (Math.random() - 0.5) * 4));
      const temperature = Math.round((state.sensorData.temperature + (Math.random() - 0.5) * 2) * 10) / 10;
      
      actions.updateSensorData({
        humidity: Math.max(0, Math.min(100, humidity)),
        temperature: Math.max(0, Math.min(50, temperature))
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const value = {
    ...state,
    ...actions
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;